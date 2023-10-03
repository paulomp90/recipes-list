<script>
    import { onMount } from 'svelte';
    import { auth } from '../lib/firebase';
    import { authStore } from '../store/store.js';
    import Nav from '../components/Nav.svelte';
    import { signOut } from 'firebase/auth';

    $: user = $authStore.user;

    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname;

            if (!user && !currentPath.includes('login')) {
                window.location.href = '/login';
                return;
            }

            if (user && currentPath.includes('login')) {
                window.location.href = '/';
                return;
            }

            authStore.update((curr) => {
                return {
                    ...curr,
                    user,
                    loading: false
                };
            });
        });
        return unsubscribe;
    });

    const handleLogout = () => {
        console.log('clicked!');
        signOut(auth);
    };
</script>

{#if user}
    <Nav on:click={handleLogout} />
{/if}
<main class="container mx-auto px-4 pt-8 pb-4">
    <slot />
</main>
