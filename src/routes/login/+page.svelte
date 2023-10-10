<script>
    import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

    import { auth } from '$lib/firebase.js';
    import { authStore } from '../../store/store.js';
    import { goto } from '$app/navigation';
    import { onDestroy } from 'svelte';
    // import { createUser } from '../../api/users.js';

    async function loginWithGoogle() {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (e) {
            console.log(e);
        }
    }

    const sub = authStore.subscribe(async (info) => {
        if (info.isLoggedIn) {
            await goto('/');
        }
    });

    onDestroy(() => {
        sub();
    });
</script>

<h1>Title</h1>
<div>
    <button on:click={loginWithGoogle}>Login</button>
</div>
