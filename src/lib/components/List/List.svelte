<script>
    import ListItem from '$lib/components/List/ListItem.svelte';

    export let list = [];

    console.log(list);
</script>

{#if list}
    {#each list as item}
        <ListItem
            id={item.id}
            name={item.name}
            autor={`${item.users.first_name} ${item.users.last_name}`}
            image={item.image}
        />
    {/each}
{:else}
    <div>No recipes created</div>
{/if}
