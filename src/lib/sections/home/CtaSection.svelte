<script lang="ts">
  import { Button } from '$lib';
  import defaultBg from '$lib/assets/images/bg-1.jpg';

  type ButtonConfig = {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'link';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  };

  export let backgroundSrc: string = defaultBg;
  export let backgroundPosition: string = 'center';
  export let backgroundSize: 'cover' | 'contain' = 'cover';
  export let overlayClass: string = '';
  export let paddingClass: string = 'py-16 lg:py-24 px-6 lg:px-12';

  export let title: string = 'Where Tradition Meets Modern Luxury';
  export let description: string =
    'We bring together classic Pakistani craftsmanship with contemporary design. Whether it’s a family event or a celebration, step into outfits that glow with grace and detail.';

  export let primaryButton: ButtonConfig | undefined = {
    label: 'Shop Now',
    href: '/shop',
    variant: 'primary',
    size: 'md',
  };
  export let secondaryButton: ButtonConfig | undefined = undefined;

  // Container customization
  export let containerClass: string =
    'max-w-2xl mx-auto text-center bg-gradient-to-br from-gray-50 rounded-lg p-10';
  export let titleClass: string = 'text-2xl font-medium text-gray-600';
  export let descriptionClass: string = 'text-gray-600';
</script>

<section
  class={`relative ${paddingClass} bg-no-repeat`}
  style={`background-image: url('${backgroundSrc}'); background-position: ${backgroundPosition}; background-size: ${backgroundSize};`}
>
  {#if overlayClass}
    <div class={`absolute inset-0 ${overlayClass}`}></div>
  {/if}
  <div class={`flex flex-col gap-4 relative z-10 ${containerClass}`}>
    {#if title}
      <p class={titleClass}>{title}</p>
    {/if}
    {#if description}
      <p class={descriptionClass}>{description}</p>
    {/if}
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      {#if primaryButton}
        <Button
          size={primaryButton.size ?? 'md'}
          variant={primaryButton.variant ?? 'primary'}
          href={primaryButton.href}
          className={primaryButton.className ?? ''}
        >
          {primaryButton.label}
        </Button>
      {/if}
      {#if secondaryButton}
        <Button
          size={secondaryButton.size ?? 'md'}
          variant={secondaryButton.variant ?? 'secondary'}
          href={secondaryButton.href}
          className={secondaryButton.className ?? ''}
        >
          {secondaryButton.label}
        </Button>
      {/if}
    </div>
  </div>
</section>
