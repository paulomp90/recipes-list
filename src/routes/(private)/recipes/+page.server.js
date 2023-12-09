export async function load({ locals }) {
    const { data } = await locals.supabase
        .from('recipe')
        .select('id, name, description, image, user (first_name, last_name)');

    const formattedData = data.map((recipe) => {
        // eslint-disable-next-line no-unused-vars
        const newObject = (({ user, ...rest }) => rest)(recipe);
        if (recipe.user && recipe.user.first_name && recipe.user.last_name) {
            return {
                ...newObject,
                author: `${recipe.user.first_name} ${recipe.user.last_name}`
            };
        }

        return newObject;
    });

    return {
        recipes: formattedData,
        title: 'Recipes',
        summary: 'You can see all recipes'
    };
}
