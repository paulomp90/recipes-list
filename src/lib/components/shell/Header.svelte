<script>
    import { Menu, LogOut, LayoutDashboard, UserCircle } from 'lucide-svelte';

    import Logo from '../Logo.svelte';
    import Loader from './Loader.svelte';
    import { getAvatar } from '$lib/utils.js';

    export let user;
    export let showLoader = false;
    export let showSidebar = false;
    export let fullWidth = false;
</script>

<header class="z-50 flex w-full flex-col border-b">
    <Loader visible={showLoader} />

    <div class="flex flex-col justify-center p-2 px-4">
        <div
            class={'flex w-full flex-row items-center justify-between ' +
                (fullWidth ? '' : 'mx-auto max-w-screen-xl')}
        >
            <div class="flex flex-1 flex-row items-center gap-2">
                <Logo />

                {#if showSidebar}
                    <div class="flex-none lg:hidden">
                        <label for="leftSidebar" class="btn btn-square btn-ghost btn-sm p-1">
                            <Menu class="h-full w-full" />
                        </label>
                    </div>
                {/if}

                <slot name="lead" />
            </div>

            <div class="flex flex-row items-center gap-2">
                <slot name="trail" />

                {#if user}
                    <div class="dropdown dropdown-end ml-6" data-sveltekit-preload-data="off">
                        <button
                            tabIndex={0}
                            class="flex cursor-pointer flex-row items-center gap-2"
                        >
                            <div class="avatar">
                                <div class="w-12 rounded-full border-2">
                                    <img src={getAvatar(user)} alt="user avatar" />
                                </div>
                            </div>
                        </button>

                        <div
                            tabIndex={0}
                            class="dropdown-content mt-4 w-64 rounded-lg border p-2 shadow"
                        >
                            <div class="flex flex-col gap-2 text-xl">
                                <a
                                    href="/dashboard"
                                    class="flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-base-200"
                                >
                                    <LayoutDashboard />
                                    Dashboard
                                </a>
                                <a
                                    href="/account"
                                    class="flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-base-200"
                                >
                                    <UserCircle />
                                    Account
                                </a>
                                <a
                                    href="/auth/logout"
                                    class="flex w-full flex-row items-center gap-2 rounded-lg p-2 text-error hover:bg-base-200"
                                >
                                    <LogOut />
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</header>
