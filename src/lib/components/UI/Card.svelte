<script>
    export let id = 0;
    export let name = '';
    export let image = '';
    export let author = '';
</script>

<a
    role="button"
    class="flex items-center rounded-lg shadow duration-150 hover:scale-[1.03] hover:shadow-lg"
    href={`../recipes/${id}`}
>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src={image} alt={`Image of the ${name} recipe`} />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {name}
            </h2>
            <p>by {author}</p>
        </div>
    </div>
</a>
