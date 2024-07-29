<script>
    import Header from '$lib/components/Header/Header.svelte';

    export let data;
    $: ({ user } = data);
</script>

<Header {user}>
    <main class="px-16 py-10">
        <slot />
    </main>
</Header>
