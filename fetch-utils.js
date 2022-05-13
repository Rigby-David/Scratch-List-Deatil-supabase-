// add supabase url and key

const SUPABASE_URL = 'https://wyotgiskxqtlavlkrzle.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3RnaXNreHF0bGF2bGtyemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTEsImV4cCI6MTk2Nzg3MzE5MX0.sPZtCT7VAb2ggZyOHup9lLa3tc0Qg7rfJi5oMMAsq-U';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// add a fetch function for your data

export async function getDiscs() {
    const response = await client.from('discs').select('*');
    return response.data;
}

export async function getDisc(id) {
    const response = await client.from('discs').select('*').match({ id: id }).single();
    return response.data;
}