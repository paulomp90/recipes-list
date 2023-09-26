<script>
    import { signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

    import { auth } from '../lib/firebase.js';

    const loginWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider());
    };

    const logout = () => {
        signOut(auth);
    };
</script>

<div>
    <button on:click={loginWithGoogle}>Login</button>
    <button on:click={logout}>Logout</button>
</div>
