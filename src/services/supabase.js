import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzyjwvkzzwhcgayemtvp.supabase.co';

// it is completely safe to save this key in the client because we applied a Row level security (RLS)
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6eWp3dmt6endoY2dheWVtdHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzczODMsImV4cCI6MjAwNzg1MzM4M30.EFZckWHBAtY3glxRDd_UDL-Ux42-2TQPXr3ltfp0S4Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
