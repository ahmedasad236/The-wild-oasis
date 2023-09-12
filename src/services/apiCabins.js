import supabase from './supabase';

export async function getCabins() {
  let { data: Cabins, error } = await supabase.from('Cabins').select('*');
  if (error) {
    throw new Error('Cabins could not be loaded');
  }

  return Cabins;
}
