<script>
    import '../app.css';
    import { authStore } from '../store/store.js';

    $: user = $authStore.user;

    authStore.subscribe((curr) => {
        console.log('store:', curr);
    });

    export let data;
</script>

<h1>Logged user: {user?.displayName}</h1>

<h1>{data.post.title}</h1>

<h1 class="text-3xl font-bold underline text-amber-700">Hello world!</h1>
