<script>
    export let name = '';
    export let label = '';
</script>

<div class="form-control w-full pb-4">
    <label class="label" for={name}>
        <span class="label-text">{label}</span>
    </label>
    <textarea {name} class="textarea textarea-bordered textarea-md"></textarea>
</div>
