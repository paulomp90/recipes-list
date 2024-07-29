<script>
    export let id = 0;
    export let name = '';
    export let image = '';
    export let author = '';
</script>

<div class="pb-4">
    <a
        role="button"
        class="flex items-center rounded-lg shadow hover:bg-green-50 hover:shadow-lg focus:shadow-lg"
        href={`../recipes/${id}`}
    >
        <img
            alt={`Image of the ${name} recipe`}
            class="mr-4 aspect-auto max-h-40 w-40 rounded-lg"
            src={image}
        />
        <div>
            <h2 class="text-lg font-semibold">{name}</h2>
            <p class="text-sm text-slate-400">{author}</p>
        </div>
    </a>
    <div class="divider" />
</div>
