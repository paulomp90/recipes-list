<script>
    import { LogOut, LayoutDashboard, UserCircle } from 'lucide-svelte';
    import { HOME_PATH } from '$lib/constants.js';

    export let href = HOME_PATH;

    import Logo from '../Logo.svelte';
    import { getAvatar } from '$lib/utils.js';

    export let user;
</script>

<nav class="navbar border-b bg-base-100">
    <div class="flex-1">
        <Logo />
    </div>
    <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="avatar btn btn-circle btn-ghost">
                <div class="w-10 rounded-full">
                    <img src={getAvatar(user)} alt="user avatar" />
                </div>
            </div>
            <ul
                class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
                <li>
                    <a
                        {href}
                        class="flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-base-200"
                    >
                        <LayoutDashboard />
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/account"
                        class="flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-base-200"
                    >
                        <UserCircle />
                        Account
                    </a>
                </li>
                <li>
                    <a
                        href="/auth/logout"
                        class="flex w-full flex-row items-center gap-2 rounded-lg p-2 text-error hover:bg-base-200"
                    >
                        <LogOut />
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
