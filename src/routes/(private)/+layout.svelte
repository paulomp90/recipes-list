<script>
    import Shell from '$lib/components/shell/Shell.svelte';

    export let data;
    $: ({ user } = data);
</script>

<Shell {user}>
    <main class="px-16 py-10">
        <slot />
    </main>
</Shell>
