<script>
    import List from '$lib/components/List/List.svelte';

    export let data;
</script>

{#if data.recipes}
    <List list={data.recipes} />
{/if}
