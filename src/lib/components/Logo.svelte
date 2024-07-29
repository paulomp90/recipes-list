<script>
    import { HOME_PATH } from '$lib/constants.js';

    export let href = HOME_PATH;
</script>

<a {href} class="flex flex-row items-center gap-1">
    <img class="w-12 text-primary" src="/logo.png" alt="our logo" />
    <h1 class="text-xl font-bold">RecipeRealm</h1>
</a>
