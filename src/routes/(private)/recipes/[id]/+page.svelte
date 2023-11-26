<script>
    import RecipeInformation from '$lib/components/RecipeInformation.svelte';
    import Steps from '$lib/components/steps/Steps.svelte';

    export let data;
    const recipe = data.recipe;

    const ingredientsList = recipe.recipe_ingredient.map((elem) => ({
        name: elem.ingredient.name,
        quantity: elem.quantity
    }));

    console.log(recipe);
</script>

<h3>{recipe.description}</h3>

<!--<pre>{JSON.stringify(recipe, null, 2)}</pre>-->

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <RecipeInformation title={recipe.name} author={recipe.user_uid} source={recipe.source} />
    <div>
        <img alt={`Image of the ${recipe.name} recipe`} src={recipe.image} />
    </div>
    <div></div>
    <div>{recipe.description}</div>
    <div><pre>{JSON.stringify(ingredientsList, null, 2)}</pre></div>
    <div><Steps steps={recipe.step} /></div>
</div>
