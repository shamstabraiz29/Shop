<script lang="ts">
  export let icon: unknown;
  export let href: string;
  export let label: string;

  const IconComponent = icon as typeof import('svelte').SvelteComponent;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:text-primary hover:bg-primary/10 hover:border-primary/40 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md"
  aria-label={label}
  title={label}
>
  {#if IconComponent}
    <span
      class="transition-transform duration-200 group-hover:rotate-3 group-hover:scale-110"
    >
      <svelte:component this={IconComponent} size={20} />
    </span>
  {/if}
</a>
