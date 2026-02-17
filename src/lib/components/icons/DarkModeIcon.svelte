<script lang="ts">
    import MaterialIcon from "./MaterialIcon.svelte";
    import type { MaterialOptions } from "./materialIcon";

    const props: MaterialOptions = $props();
</script>

<MaterialIcon icon="dark_mode" {...props} />