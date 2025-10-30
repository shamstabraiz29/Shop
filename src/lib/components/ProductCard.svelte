<script lang="ts">
  import Button from './Button.svelte';

  export let title: string;
  export let href: string = '/shop';
  export let image: string | undefined = undefined;
</script>

<div class="group">
  <div class="text-center">
    <div class="relative overflow-hidden mb-4">
      <div class="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        {#if image}
          <img
            src={image}
            alt={title}
            class="w-full h-full object-cover rounded-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
          />
        {:else}
          <div
            class="w-full h-full flex items-center justify-center bg-gray-200"
          >
            <span class="text-gray-400 text-lg">No Image</span>
          </div>
        {/if}
      </div>
    </div>
    <Button variant="link" {href} size="sm">{title}</Button>
  </div>
</div>
