<script>
    export let busy = false;
    export let provider;
</script>

<button
    type="submit"
    name="provider"
    value={provider}
    class="grid h-full w-full place-items-center bg-white"
    disabled={busy}
>
    {#if provider === 'google'}
        <div
            class="flex w-full justify-center gap-2 rounded-lg border px-4 py-2 transition duration-150 hover:bg-base-100 hover:shadow"
        >
            <img
                class="h-6 w-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
            />
            <span>Login with Google</span>
        </div>
    {:else}
        <h1
            class="flex w-full justify-center gap-2 rounded-lg border px-4 py-2 capitalize transition duration-150 hover:bg-base-100 hover:shadow"
        >
            Login with {provider}
        </h1>
    {/if}
</button>
