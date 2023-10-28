<script>
    export let data;
</script>

<h3>{data.recipe.description}</h3>

<pre>{JSON.stringify(data.recipe, null, 2)}</pre>
