let flag = false;

/**
 * This is a replacement/wrapper for history.pushState when used in react.
 * It prevents pushState to be called twice in one render run.
 * React does some actions behind the scenes that results in calls that capture console outputs.
 */
export const pushStateReactWorkaround = (state: any, title: string, url: string) => {
    if (!flag) {
        window.history.pushState(state, title, url);
        flag = true;
        requestAnimationFrame(() => flag = false);
    } else {
        window.history.replaceState(state, title, url);
    }
};