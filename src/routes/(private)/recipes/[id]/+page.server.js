export async function load({ locals, params }) {
    const { data } = await locals.supabase.from('recipe').select().eq(`id`, params.id).single();

    return {
        recipe: data,
        title: 'Dashboard',
        summary: 'You can see overview of your usage here.'
    };
}
