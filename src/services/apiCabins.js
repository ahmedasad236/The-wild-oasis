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

export async function createCabin(newCabin) {
  const uniqueImageName = `${Math.random()}-${newCabin.image.name}`.replace(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${uniqueImageName}`;

  // 1. Create a cabin
  const { data, error } = await supabase
    .from('Cabins')
    .insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    throw new Error('Cabin could not be created');
  }

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
