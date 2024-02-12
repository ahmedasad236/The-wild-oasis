import supabase from './supabase';
import { supabaseAvatarsURL } from './supabase';

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: ''
      }
    }
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) {
    return null;
  }

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateUser({ password, fullName, avatar }) {
  // 1. Update the user's Full name and password

  let updateData = {};
  if (password) updateData.password = password;
  if (fullName) updateData.data = { fullName };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) {
    throw new Error(error.message);
  }

  if (!avatar) return data;

  // 2. Upload the avatar image to the storage
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: fileError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar);
  if (fileError) {
    throw new Error(fileError.message);
  }
  // 3. Update the user's avatar

  const { data: avatarData, error: avatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseAvatarsURL}/${fileName}`
      }
    });

  if (avatarError) {
    throw new Error(avatarError.message);
  }

  return avatarData;
}
