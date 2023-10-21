export async function load({ locals: { supabase } }) {
    const { data } = await supabase.from('recipe').select();

    console.log(data);

    return {
        recipes: data,
        title: 'Dashboard',
        summary: 'You can see overview of your usage here.'
    };
}
