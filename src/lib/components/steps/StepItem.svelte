<script>
    export let number = 1;
    export let value = '';
    export let editMode = false;

    const name = `step-${number}`;
</script>

<div class="form-control w-full pb-4">
    <label class="label" for={name}>
        <span class="label-text">{'Step ' + number}</span>
    </label>
    {#if editMode}
        <textarea
            {name}
            {value}
            class="textarea textarea-bordered textarea-md"
            placeholder="Add the step description"
        ></textarea>
    {/if}
    <p>{value}</p>
</div>
