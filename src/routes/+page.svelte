<script>
    import '../app.css';
    import { authStore } from '../store/store.js';

    authStore.subscribe((curr) => {
        console.log('store:', curr);
    });
</script>

<h1>Logged user:</h1>

<h1 class="text-3xl font-bold underline text-amber-700">Hello world!</h1>
