<script>
    import Step from '$lib/components/steps/StepItem.svelte';

    export let steps = [''];
    export let editMode = false;

    function addStep() {
        steps = [...steps, ''];
    }
</script>

<div class="form-control w-full">
    <div class="pb-6">
        {#each steps as step, i}
            <Step {editMode} value={step} number={i + 1} />
        {/each}
    </div>
    {#if editMode}
        <button class="btn btn-secondary max-w-[125px]" on:click={addStep}>Add step</button>
    {/if}
</div>
