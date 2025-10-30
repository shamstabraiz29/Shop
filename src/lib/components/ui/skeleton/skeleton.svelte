<script lang="ts">
  import { cn } from '$lib/utils.js';

  let { class: className = '', ...rest } = $props<
    { class?: string } & Record<string, unknown>
  >();
</script>

<div
  data-slot="skeleton"
  class={cn('animate-pulse rounded-md bg-gray-200', className)}
  {...rest}
></div>
