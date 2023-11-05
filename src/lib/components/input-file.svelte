<script>
    export let name = '';

    let input;
    let image;
    let showImage = false;

    function onChange() {
        const file = input.files[0];

        if (file) {
            showImage = true;

            const reader = new FileReader();
            reader.addEventListener('load', function () {
                image.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(file);

            return;
        }
        showImage = false;
    }
</script>

<div class="form-control flex h-80 w-full items-center pb-4">
    <div
        class="mb-4 flex h-80 max-h-60 w-80 items-center justify-center border-2 border-slate-300 text-slate-500"
    >
        {#if showImage}
            <img class="aspect-auto max-h-60" bind:this={image} src="" alt="Preview" />
        {:else}
            <span>Image Preview</span>
        {/if}
    </div>

    <input
        bind:this={input}
        on:change={onChange}
        type="file"
        {name}
        class="file-input file-input-bordered max-w-xs"
    />
</div>
