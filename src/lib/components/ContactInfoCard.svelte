<script lang="ts">
  export let icon: unknown;
  export let title: string;
  export let description: string | null = null;
  export let linkHref: string | null = null;
  export let linkText: string | null = null;
  export let iconBgClass = 'bg-gray-900';

  const IconComponent = icon as typeof import('svelte').SvelteComponent;
</script>

<div
  class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
>
  <div class="flex items-start gap-4">
    <div
      class={`shrink-0 rounded-full ${iconBgClass} p-3 text-white ring-2 ring-white shadow-sm`}
    >
      {#if IconComponent}
        <svelte:component this={IconComponent} size={22} />
      {/if}
    </div>
    <div>
      <h3 class="text-lg font-semibold text-secondary">{title}</h3>
      {#if description}
        <p class="text-gray-600 mt-1">{description}</p>
      {/if}
      <slot />
      {#if linkHref && linkText}
        <a
          href={linkHref}
          class="mt-2 inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
        >
          {linkText}
        </a>
      {/if}
    </div>
  </div>
</div>
