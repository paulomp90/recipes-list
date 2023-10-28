export async function load({ locals }) {
    const session = await locals.getSession();

    const { data } = await locals.supabase
        .from('recipe')
        .select(`name,image,id, users (*)`)
        .eq(`users.id`, session.user.id);

    return {
        recipes: data,
        title: 'Dashboard',
        summary: 'You can see overview of your usage here.'
    };
}
