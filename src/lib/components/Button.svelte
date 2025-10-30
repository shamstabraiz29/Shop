<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { MoveRight } from 'lucide-svelte';

  export let variant: 'primary' | 'secondary' | 'outline' | 'link' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled: boolean = false;
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let className: string = '';
  export let fixedWidth: boolean = false;

  const dispatch = createEventDispatcher();

  function handleClick(event: MouseEvent) {
    if (disabled) {
      event.preventDefault();
      return;
    }
    dispatch('click', event);
  }

  // Base classes for all variants
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Fixed width classes based on size
  const fixedWidthClasses = {
    sm: 'w-full sm:w-24',
    md: 'w-full sm:w-32',
    lg: 'w-full sm:w-44',
  };

  // Variant classes
  const variantClasses = {
    primary:
      'bg-primary text-white rounded-lg transform hover:-translate-y-1 hover:bg-opacity-90 focus:ring-primary hover:shadow-primary/50 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    secondary:
      'bg-secondary text-white rounded-lg transform hover:-translate-y-1 hover:bg-opacity-90 focus:ring-secondary hover:shadow-secondary/50 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    outline:
      'border-2 border-primary text-primary bg-transparent rounded-lg transform hover:-translate-y-1 hover:bg-primary hover:text-white focus:ring-primary hover:shadow-primary/30 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    link: 'text-primary bg-transparent hover:text-primary/70 underline-offset-4 hover:underline focus:ring-primary hover:scale-105',
  };

  // Combine all classes
  $: classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fixedWidth ? fixedWidthClasses[size] : ''} ${variant === 'link' ? 'link-variant' : ''} ${className}`;

  // Determine if it should render as a link or button
  $: isLink = href !== undefined;
</script>

{#if isLink}
  <a
    {href}
    class={classes}
    class:disabled
    on:click={handleClick}
    on:keydown={(e) => e.key === 'Enter' && handleClick(e as any)}
    role="button"
    tabindex={disabled ? -1 : 0}
  >
    <div class="relative z-10 flex items-center justify-center">
      <span class="button-text">
        <slot />
      </span>
      <div class="arrow-container">
        <MoveRight size={24} class="arrow-icon" />
      </div>
    </div>
  </a>
{:else}
  <button {type} class={classes} {disabled} on:click={handleClick}>
    <div class="relative z-10 flex items-center justify-center">
      <span class="button-text">
        <slot />
      </span>
      <div class="arrow-container">
        <MoveRight size={24} class="arrow-icon" />
      </div>
    </div>
  </button>
{/if}

<style>
  /* Shimmer effect enhancement */
  :global(.group:hover::before) {
    animation: shimmer 0.7s ease-in-out;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  /* Text and arrow animation - exclude link variant */
  :global(.button-text) {
    transition: all 0.3s ease-in-out;
    transform: translateX(0);
    opacity: 1;
  }

  :global(.arrow-container) {
    position: absolute;
    transition: all 0.3s ease-in-out;
    transform: translateX(20px);
    opacity: 0;
  }

  /* Only apply animation to non-link variants */
  :global(.group:not(.link-variant):hover .button-text),
  :global(a.group:not(.link-variant):hover .button-text),
  :global(button.group:not(.link-variant):hover .button-text) {
    transform: translateX(-20px);
    opacity: 0;
  }

  :global(.group:not(.link-variant):hover .arrow-container),
  :global(a.group:not(.link-variant):hover .arrow-container),
  :global(button.group:not(.link-variant):hover .arrow-container) {
    transform: translateX(0);
    opacity: 1;
  }

  /* Ensure link variant text always stays visible */
  :global(.link-variant .button-text),
  :global(a.link-variant:hover .button-text),
  :global(.group.link-variant:hover .button-text) {
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  /* Arrow icon animation - Continuous left to right movement */
  :global(.arrow-icon) {
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  :global(.group:not(.link-variant):hover .arrow-icon) {
    animation:
      arrow-slide-in 0.4s ease-out forwards,
      arrow-slide-right 1.5s ease-in-out infinite 0.4s;
  }

  /* Entrance animation - slide in from left */
  @keyframes arrow-slide-in {
    0% {
      transform: translateX(-20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Continuous left to right sliding animation */
  @keyframes arrow-slide-right {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(8px);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* For link variant, keep text visible and hide arrow */
  :global(.group.link-variant .arrow-container) {
    display: none;
  }

  :global(.group:disabled .button-text),
  :global(.group.disabled .button-text) {
    transform: translateX(0);
    opacity: 1;
  }

  :global(.group:disabled .arrow-container),
  :global(.group.disabled .arrow-container) {
    transform: translateX(20px);
    opacity: 0;
  }

  /* Disable transform animations for disabled state */
  :global(.group:disabled),
  :global(.group.disabled) {
    transform: none !important;
  }
</style>
