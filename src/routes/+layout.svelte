<script>
	import { onMount } from 'svelte';
	import { auth } from '../lib/firebase';

	onMount(() => {
		console.log('Mounting');
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			console.log('Loggedin User:', user);

			if (!user) {
				return;
			}
		});
		return unsubscribe;
	});
</script>

<div>
	<slot />
</div>
