<script>
    import Step from '$lib/components/steps/stepItem.svelte';

    export let steps = [''];

    function addStep() {
        steps = [...steps, ''];
    }
</script>

<div class="form-control w-full">
    <div class="pb-6">
        {#each steps as step, i}
            <Step value={step} number={i + 1} />
        {/each}
    </div>
    <button class="btn btn-secondary max-w-[125px]" on:click={addStep}>Add step</button>
</div>
