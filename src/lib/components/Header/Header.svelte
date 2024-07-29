<script>
    import Topbar from './Topbar.svelte';

    export let user;
</script>

<div class="flex h-screen w-full flex-col overflow-hidden">
    <Topbar {user} />
    <div class="h-full w-full overflow-y-auto p-2 px-4 lg:p-4">
        <slot />
    </div>
</div>
