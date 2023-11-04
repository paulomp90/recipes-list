<script>
    import Input from '$lib/components/input.svelte';
    import TextArea from '$lib/components/textarea.svelte';
    export let data;
</script>

<form method="POST">
    <Input name="name" label="Name" />
    <TextArea name="description" label="Description" />
    <Input name="source" label="Source" />
    <Input name="file" label="Image" type="file" />
    <button>Save</button>
</form>
