<script>
    import ListItem from '$lib/components/List/ListItem.svelte';

    export let list = [];
</script>

{#if list}
    {#each list as item}
        <ListItem id={item.id} name={item.name} author={item.author} image={item.image} />
    {/each}
{:else}
    <div>No recipes created</div>
{/if}
