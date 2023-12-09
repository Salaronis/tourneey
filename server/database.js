import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.dbURL, process.env.dbAPI);


export default supabase;