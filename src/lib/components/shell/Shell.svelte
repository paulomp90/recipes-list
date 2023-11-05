<script>
    import Header from './Header.svelte';

    const sidebarElemId = 'leftSidebar';

    export let user;
</script>

<div class="flex h-screen w-full flex-col overflow-hidden">
    {#if $$slots.sidebar}
        <Header showLoader showSidebar fullWidth {user}>
            <svelte:fragment slot="lead">
                <slot name="headerLead" />
            </svelte:fragment>

            <svelte:fragment slot="trail">
                <slot name="headerTrail" />
            </svelte:fragment>
        </Header>

        <div class="drawer lg:drawer-open">
            <input id={sidebarElemId} type="checkbox" class="drawer-toggle" />

            <div
                class="drawer-content flex h-[92vh] flex-col items-center justify-center overflow-y-scroll"
            >
                <!-- content div -->
                <div class="flex h-full w-full flex-grow flex-col gap-2 p-4">
                    <div class="mx-auto flex w-full max-w-screen-xl flex-col gap-2">
                        <slot />
                    </div>
                </div>
            </div>

            <div class="drawer-side z-50">
                <label for={sidebarElemId} class="drawer-overlay" />
                <div class="menu h-full w-72 border-r bg-base-300 p-0 text-base-content">
                    <slot name="sidebar" />
                </div>
            </div>
        </div>
    {:else}
        <Header showLoader fullWidth {user} />
        <div class="h-full w-full overflow-y-auto p-2 px-4 lg:p-4">
            <slot />
        </div>
    {/if}
</div>
