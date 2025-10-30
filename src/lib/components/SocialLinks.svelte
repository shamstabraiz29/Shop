<script context="module" lang="ts">
  export type SocialItem = {
    href: string;
    label: string;
    icon: unknown;
  };
</script>

<script lang="ts">
  import SocialIconButton from '$lib/components/SocialIconButton.svelte';

  export let items: SocialItem[] = [];
</script>

<div class="w-full">
  <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
    {#each items as item}
      <SocialIconButton icon={item.icon} href={item.href} label={item.label} />
    {/each}
  </div>
  <slot />
</div>
