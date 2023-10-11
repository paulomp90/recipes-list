export async function load({ locals }) {
    const session = await locals.getSession();

    return {
        session,
        supabaseUrl: import.meta.env.VITE_PUBLIC_SUPABASE_URL,
        supabaseKey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
    };
}
