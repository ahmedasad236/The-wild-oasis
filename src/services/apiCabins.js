import supabase from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('Cabins').select('*');

  if (error) {
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
