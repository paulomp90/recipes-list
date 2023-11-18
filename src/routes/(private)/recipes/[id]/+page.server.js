export async function load({ locals, params }) {
    const { data } = await locals.supabase
        .from('recipe')
        .select('name, description, source, image, step, user (first_name, last_name)')
        .eq(`id`, params.id)
        .single();

    let fullName = '';
    if (data.user && data.user.first_name && data.user.last_name) {
        fullName = `${data.user.first_name} ${data.user.last_name}`;
    }

    return {
        recipe: { ...data, user: { ...data.user, full_name: fullName } },
        title: 'Dashboard',
        summary: 'You can see overview of your usage here.'
    };
}
