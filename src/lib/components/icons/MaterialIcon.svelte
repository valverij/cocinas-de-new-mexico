<script lang="ts">
    import type { ClassValue } from "svelte/elements";
    import type { MaterialOptions } from "./materialIcon";

    const defaults: MaterialOptions = {
        filled: false,
        weight: 400,
        grade: 0,
        opticalSize: 24,
    };

    const props: { icon: string, class?: ClassValue } & MaterialOptions = $props();
</script>

<span style="font-variation-settings: 'FILL' {Number(props.filled ?? defaults.filled)}, 'wght' {props.weight ?? defaults.weight}, 'GRAD' { props.grade ?? defaults.grade }, 'opsz' {props.opticalSize ?? defaults.opticalSize}">
    <span class={["align-middle", "material-symbols-outlined", { filled: props.filled }, props.class]}>{props.icon}</span>
</span>

<style global>
    .filled {
        font-variation-settings: "FILL" 1
    }
</style>
