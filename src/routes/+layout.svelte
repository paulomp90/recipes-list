<script>
    import { onMount } from 'svelte';
    import { auth } from '../lib/firebase';
    import { authStore } from '../store/store.js';

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
</script>

<div>
    <slot />
</div>
