<script>
    import ListItem from '$lib/components/List/ListItem.svelte';
    import Card from '$lib/components/UI/Card.svelte';

    export let list = [];
</script>

{#if list}
    <div class="grid grid-cols-3 gap-10">
        {#each list as item}
            <Card id={item.id} name={item.name} author={item.author} image={item.image} />
        {/each}
    </div>
{:else}
    <div>No recipes created</div>
{/if}
