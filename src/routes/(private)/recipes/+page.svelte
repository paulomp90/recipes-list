<script>
    import List from '$lib/components/List/List.svelte';
    export let data;
    const recipes = data.recipes;
</script>

<List list={recipes} />
