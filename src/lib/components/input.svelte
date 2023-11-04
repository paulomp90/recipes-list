<script>
    export let value = '';
    export let name = '';
    export let label = '';

    export let type = 'text';
</script>

<div class="form-control w-full">
    <label class="label" for={name}>
        <span class="label-text">{label}</span>
    </label>
    <input {type} {name} placeholder="Type here" class="input input-bordered" {value} />
</div>
