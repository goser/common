/**
 * This is a replacement/wrapper for history.pushState when used in react.
 * It prevents pushState to be called twice in one render run.
 * React does some actions behind the scenes that results in calls that capture console outputs.
 */
export declare const pushStateReactWorkaround: (state: any, title: string, url: string) => void;
