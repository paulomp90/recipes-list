<script>
    export let id = 0;
    export let name = '';
    export let image = '';
    export let autor = '';
</script>

<a class="flex items-center" href={`../recipes/${id}`}>
    <img
        alt={`Image of the ${name} recipe`}
        class="aspect-auto rounded-lg max-h-40 w-40 mr-4"
        src={image}
    />
    <div>
        <h2 class="text-lg font-semibold">{name}</h2>
        <p class="text-sm text-slate-400">{autor}</p>
    </div>
</a>
