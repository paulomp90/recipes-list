<script>
    import { LogOut, User } from 'lucide-svelte';
    import { auth } from '$lib/firebase.js';
    import { goto } from '$app/navigation';
    import { authStore } from '../store/store.js';
    // handles the logout of
    async function logout() {
        await auth
            .signOut()
            .then(() => {
                // Sign-out successful.
                console.log('success');
                if (typeof window !== 'undefined') {
                    console.log('client-side');
                    goto('/login', { invalidateAll: true });
                    // Your code
                }
            })
            .catch(() => {
                // An error happened.
            });
    }
</script>

<div class="navbar bg-base-100 flex justify-between">
    <div>
        <a class="btn btn-ghost normal-case text-xl" href="/">Recipes</a>
    </div>
    <div class="gap-2">
        <div class="flex gap-2 items-center">
            <label class="avatar">
                {#if $authStore.user?.photoURL}
                    <div class="w-10 rounded-full">
                        <img
                            referrerpolicy="no-referrer"
                            alt="Your avatar"
                            src={$authStore.user?.photoURL}
                        />
                    </div>
                {:else if $authStore.user && !$authStore.user?.photoURL}
                    <User
                        class="left-0 right-0 mx-auto text-center top-2/4"
                        absoluteStrokeWidth
                        size="24"
                    />
                {/if}
            </label>

            {#if $authStore.user}
                <button class="btn btn-ghost btn-sm" on:click={logout}><LogOut /></button>
            {:else}
                <a href="/login">Login</a>
            {/if}
        </div>
    </div>
</div>
