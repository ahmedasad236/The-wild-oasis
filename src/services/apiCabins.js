import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data: Cabins, error } = await supabase.from('Cabins').select('*');
  if (error) {
    throw new Error('Cabins could not be loaded');
  }

  return Cabins;
}

export async function deleteCabin(cabinId) {
  const { data, error } = await supabase
    .from('Cabins')
    .delete()
    .eq('id', cabinId);

  if (error) {
    throw new Error('Cabins could not be deleted');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const uniqueImageName = `${Math.random()}-${newCabin.image.name}`.replace(
    '/',
    ''
  );

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${uniqueImageName}`;

  let query = supabase.from('Cabins');

  // 1. Create a cabin if no id
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // 2. Edit a cabin if there is an id
  else {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    throw new Error('Cabin could not be created');
  }

  // If it is already exists
  if (hasImagePath) return data;

  // 2. Upload an image
  const { error: uploadErr } = supabase.storage
    .from('cabin-images')
    .upload(uniqueImageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading this image
  if (uploadErr) {
    deleteCabin(data.id);
  }
  return data;
}
