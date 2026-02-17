import type { ClassValue } from "svelte/elements"

export interface MaterialOptions {
    filled?: boolean,
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    grade?: number,
    opticalSize?: number
    class?: ClassValue
}
