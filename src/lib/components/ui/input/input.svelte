<script lang="ts">
  import type {
    HTMLInputAttributes,
    HTMLInputTypeAttribute,
  } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

  type Props = WithElementRef<
    Omit<HTMLInputAttributes, 'type'> &
      (
        | { type: 'file'; files?: FileList }
        | { type?: InputType; files?: undefined }
      )
  >;

  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    'data-slot': dataSlot = 'input',
    ...restProps
  }: Props = $props();
</script>

{#if type === 'file'}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn(
      'w-full rounded-lg transition-all duration-200 text-gray-600 border border-gray-300 focus:outline-none focus:border-gray-400 px-4 py-3 text-base bg-white disabled:opacity-50 disabled:cursor-not-allowed',
      'placeholder:text-gray-500',
      className
    )}
    type="file"
    bind:files
    bind:value
    {...restProps}
  />
{:else}
  <input
    bind:this={ref}
    data-slot={dataSlot}
    class={cn(
      'w-full rounded-lg transition-all duration-200 text-gray-600 border border-gray-300 focus:outline-none focus:border-gray-400 px-4 py-3 text-base bg-white disabled:opacity-50 disabled:cursor-not-allowed',
      'placeholder:text-gray-500',
      className
    )}
    {type}
    bind:value
    {...restProps}
  />
{/if}
