<script>
    import { onMount } from 'svelte';
    import { auth } from '../lib/firebase';
    import { authStore } from '../store/store.js';
    import Nav from '../components/Nav.svelte';

    onMount(() => {
        auth.onAuthStateChanged((user) => {
            authStore.set({
                isLoggedIn: user !== null,
                user
            });
        });
    });
</script>

<Nav />
<main class="container h-screen mx-auto px-4 pt-8 pb-4">
    <slot />
</main>
