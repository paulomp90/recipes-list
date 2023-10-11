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

<header class="w-full flex flex-col border-b z-50">
    <Loader visible={showLoader} />

    <div class="flex flex-col justify-center p-2 px-4">
        <div
            class={'flex flex-row items-center justify-between w-full ' +
                (fullWidth ? '' : 'max-w-screen-xl mx-auto')}
        >
            <div class="flex flex-row items-center flex-1 gap-2">
                <Logo />

                {#if showSidebar}
                    <div class="flex-none lg:hidden">
                        <label for="leftSidebar" class="btn btn-square btn-sm btn-ghost p-1">
                            <Menu class="w-full h-full" />
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
                            class="cursor-pointer flex flex-row gap-2 items-center"
                        >
                            <div class="avatar">
                                <div class="w-12 rounded-full border-2">
                                    <img src={getAvatar(user)} alt="user avatar" />
                                </div>
                            </div>
                        </button>

                        <div
                            tabIndex={0}
                            class="dropdown-content border rounded-lg w-64 p-2 shadow mt-4"
                        >
                            <div class="flex flex-col gap-2 text-xl">
                                <a
                                    href="/dashboard"
                                    class="p-2 flex flex-row items-center gap-2 rounded-lg hover:bg-base-200"
                                >
                                    <LayoutDashboard />
                                    Dashboard
                                </a>
                                <a
                                    href="/account"
                                    class="p-2 flex flex-row items-center gap-2 rounded-lg hover:bg-base-200"
                                >
                                    <UserCircle />
                                    Account
                                </a>
                                <a
                                    href="/auth/logout"
                                    class="w-full p-2 flex flex-row items-center gap-2 rounded-lg hover:bg-base-200 text-error"
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
