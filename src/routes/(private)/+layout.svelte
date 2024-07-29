<script>
    import Header from '$lib/components/Header/Header.svelte';

    export let data;
    $: ({ user } = data);
</script>

<Header {user} />
<div class="pt-[67px]" />
<main class="container mx-auto h-[calc(100vh-67px)] py-10">
    <slot />
</main>
