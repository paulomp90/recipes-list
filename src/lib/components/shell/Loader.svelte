<script>
    import { navigating } from '$app/stores';
    import { derived } from 'svelte/store';

    export let visible = true;

    let timer = null;
    const navigationIsDelayed = derived(navigating, (newValue, set) => {
        if (timer) {
            clearTimeout(timer);
        }
        if (newValue) {
            timer = setTimeout(() => set(true), 500);
        }
        set(false);
    });

    $: animate = visible && $navigationIsDelayed;
</script>

<div
    class={'sticky top-0 z-50 min-h-[4px] w-full bg-transparent ' +
        (animate ? 'animated-gradient' : '')}
/>

<style>
    .animated-gradient {
        background: repeating-linear-gradient(to right, black 0%, white 50%, white 100%);
        width: 100%;
        background-size: 200% auto;
        background-position: 0 100%;
        animation: gradient 2s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }

    @keyframes gradient {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
</style>
