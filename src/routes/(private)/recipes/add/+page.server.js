// export async function load({ locals, params }) {
//     // const { data } = await locals.supabase.from('recipe').select().eq(`id`, params.id).single();
//
//     return {
//         recipe: data,
//         title: 'Dashboard',
//         summary: 'You can see overview of your usage here.'
//     };
// }

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');

        console.log(formData);

        return { success: true };
    }
};
