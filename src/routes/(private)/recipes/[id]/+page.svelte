<script>
    import RecipeInformation from '$components/RecipeInformation.svelte';

    export let data;
    const recipe = data.recipe;
</script>

<h3>{recipe.description}</h3>

<pre>{JSON.stringify(recipe, null, 2)}</pre>

<div>
    <RecipeInformation title={recipe.name} author={recipe.user_uid} source={recipe.source} />
</div>
