<script>
    import { enhance } from '$app/forms';

    import Input from '$lib/components/input.svelte';
    import InputFile from '$lib/components/input-file.svelte';
    import TextArea from '$lib/components/textarea.svelte';
    import Steps from '$lib/components/steps/Steps.svelte';
    export let data;
</script>

<form
    method="POST"
    use:enhance={({ formElement, formData, action, cancel }) => {
        // `formElement` is this `<form>` element
        // `formData` is its `FormData` object that's about to be submitted
        // `action` is the URL to which the form is posted
        // calling `cancel()` will prevent the submission
        // `submitter` is the `HTMLElement` that caused the form to be submitted

        console.log(formElement);
        console.log('a ver');
        console.log(formData);
        return async ({ result, update }) => {
            // `result` is an `ActionResult` object
            // `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
        };
    }}
>
    <div class="flex gap-4">
        <div class="w-1/2">
            <Input name="name" label="Name" />
            <TextArea name="description" label="Description" />
            <Input name="source" label="Source" />
            <Steps />
        </div>
        <div class="w-1/2">
            <InputFile name="file" />
        </div>
    </div>
    <button class="btn btn-primary mt-20" type="submit">Save</button>
</form>
