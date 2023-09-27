import supabase from './supabase';

export async function getCabins() {
  let { data: Cabins, error } = await supabase.from('Cabins').select('*');
  if (error) {
    throw new Error('Cabins could not be loaded');
  }

  return Cabins;
}

export async function deleteCabin(cabinId) {
  console.log('here');
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
  const { data, error } = await supabase.from('Cabins').insert([newCabin]);
  if (error) {
    throw new Error('Cabin could not be created');
  }

  return data;
}