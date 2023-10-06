<script>
    import { authStore } from '../store/store.js';
    import { auth } from '$lib/firebase.js';

    // handles the logout of
    async function logout() {
        await auth.signOut();
    }
</script>

<header class="px-20 pt-8 pb-4">
    <div class="flex justify-between gap-2">
        <div>
            <!-- Add icon -->
            <p class="text-xl font-bold">Recipes</p>
        </div>
        {#if !$authStore.user}
            <nav>
                <a href="/login">Login</a>
            </nav>
        {:else}
            <nav>
                <button on:click={logout}>Logout</button>
            </nav>
        {/if}
    </div>
</header>
