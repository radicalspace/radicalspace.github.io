declare module '*.md'{
    import type { Component } from "svelte";

    export default class Markdown extends (Component as unknown as new () => Component){}
    export const metadata: Record<string, unknown>;
}