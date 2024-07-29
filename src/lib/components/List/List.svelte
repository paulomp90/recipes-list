<script>
    import Card from '$lib/components/UI/Card.svelte';

    export let list = [];
</script>

{#if list}
    <div class="grid auto-cols-max grid-flow-col gap-8">
        {#each list as item}
            <Card id={item.id} name={item.name} author={item.author} image={item.image} />
        {/each}
    </div>
{:else}
    <div>No recipes created</div>
{/if}
