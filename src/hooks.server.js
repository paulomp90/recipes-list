import { sequence } from '@sveltejs/kit/hooks';
import { redirect, error } from '@sveltejs/kit';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

const AUTH_ROUTE = '/auth';
const ADMIN_ROUTE_PREFIX = '/(private)/admin';
const PRIVATE_ROUTE_PREFIX = '/(private)';

// Attaches a supabase client to the event.
const attachSupabase = async ({ event, resolve }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: import.meta.env.VITE_PUBLIC_SUPABASE_URL,
        supabaseKey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
        event
    });

    event.locals.getSession = async () => {
        const {
            data: { session }
        } = await event.locals.supabase.auth.getSession();
        return session;
    };

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range';
        }
    });
};

// Authenticates the user for private and admin routes, and redirects
// to the auth route if the user is not authenticated.
const authenticate = async ({ event, resolve }) => {
    const routeId = event.route.id;
    if (routeId === null) {
        throw error(404, 'What are you looking for?');
    }

    let canAccess = false;

    if (routeId.startsWith(ADMIN_ROUTE_PREFIX)) {
        // admin route: only the admin can access.
        const session = await event.locals.getSession();
        console.log(session);
        canAccess = session?.user.email === import.meta.env.VITE_ADMIN_EMAIL;
    } else if (routeId.startsWith(PRIVATE_ROUTE_PREFIX)) {
        // private route: only signed in users can access.
        const session = await event.locals.getSession();
        canAccess = !!session;
    } else {
        // public route: anyone can access.
        canAccess = true;
    }

    if (!canAccess) throw redirect(303, AUTH_ROUTE);

    return resolve(event);
};

export const handle = sequence(
    attachSupabase,
    authenticate
    // NOTE: add more hooks if needed here.
);
