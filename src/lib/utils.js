import { applyAction } from '$app/forms';
import { toast } from 'svelte-french-toast';

export const getAvatar = (user) => {
    if (user.user_metadata.avatar_url) return user.user_metadata.avatar_url;
    if (user.user_metadata.avatar) return user.user_metadata.avatar;
    return 'https://ui-avatars.com/api/?name=' + user.email;
};

// withLoading returns a SvelteKit submit function that displays a toast
// while the form submission is being processed.
export const withLoading = ({
    waitMsg = 'Please wait...',
    successMsg = 'Done',
    failureMsg = 'Something went wrong',
    callback
}) => {
    return () => {
        if (callback) callback();

        const tid = toast.loading(waitMsg, { duration: 60000 });
        return ({ result }) => {
            setTimeout(() => toast.dismiss(tid), 5000);

            switch (result.type) {
                case 'success':
                case 'redirect': {
                    toast.success(successMsg, { id: tid });
                    break;
                }

                case 'failure': {
                    const msg = result.data?.message || failureMsg;
                    toast.error(msg, { id: tid });
                    break;
                }

                case 'error': {
                    toast.error(failureMsg, { id: tid });
                    break;
                }
            }

            if (callback) callback(result);
            return applyAction(result);
        };
    };
};
