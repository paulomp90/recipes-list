This project aims to create a recipe management app for personal use, and as a bonus be able to learn svelte framework

- [SvelteKit](https://kit.svelte.dev/)
- Database: [Supabase](https://supabase.com/)
- Theming: [DaisyUI](https://daisyui.com/) and [TailwindCSS](https://tailwindcss.com/)
- Icons: [Lucide](https://lucide.dev/)

## Developing

1. Create a Supabase account [here](https://supabase.com/)
2. Create `.env` in the root of the project with the following variables

```
VITE_PUBLIC_SUPABASE_URL=
VITE_PUBLIC_SUPABASE_ANON_KEY=
VITE_ADMIN_EMAIL=
```

3. Then proceed to the regular commands

```bash
# Install packages
yarn

# or start the server and open the app in a new browser tab
yarn dev
```

**NOTE**: This project was created using [Sukit](https://github.com/spy16/sukit)
