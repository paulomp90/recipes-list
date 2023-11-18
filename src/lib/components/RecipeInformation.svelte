<script>
    export let title = '';
    export let author = '';
    export let source = '';
</script>

<div class="z-50 flex w-full flex-col border-b">
    {#if title}
        <div class="">
            <h1>{title}</h1>
        </div>
    {/if}
    <div class="">
        <h3>{author}</h3>
    </div>
    <div class="">
        <p>{source}</p>
    </div>
</div>
