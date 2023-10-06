<script>
    import '../app.css';
    import { authStore } from '../store/store.js';

    $: user = $authStore.user;

    export let data;
</script>

{#if user}
    <h1>Logged user: {user?.displayName}</h1>

    <h1>{data.post.title}</h1>

    <h1 class="text-3xl font-bold underline text-amber-700">Hello world!</h1>
{/if}
