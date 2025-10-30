<script>
  import { Linkedin, Instagram, Mail } from 'lucide-svelte';

  export let name;
  export let role;
  export let email;
  export let linkedinUrl = undefined;
  export let instagramUrl = undefined;
  export let avatarEmoji = undefined;
  export let avatarSrc = undefined;
  export let blurb = undefined;
  export let ringFrom = 'from-primary';
  export let ringTo = 'to-secondary';
</script>

<div
  class="group relative overflow-visible rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 \
    hover:-translate-y-2 hover:bg-white focus-within:shadow-2xl"
>
  <div
    class="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-primary/15 blur-3xl opacity-60 -z-10 group-hover:scale-110 transition-transform"
  ></div>
  <div
    class="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-secondary/15 blur-3xl opacity-50 -z-10 group-hover:scale-110 transition-transform"
  ></div>
  <div class="flex flex-col items-center text-center">
    <div class="relative mb-4">
      <div
        class={`h-28 w-28 rounded-full bg-linear-to-tr ${ringFrom} ${ringTo} p-[3px]`}
      >
        <div
          class="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden"
        >
          {#if avatarSrc}
            <img
              src={avatarSrc}
              alt={name}
              class="h-full w-full object-cover"
            />
          {:else}
            <span class="text-3xl">{avatarEmoji ?? '👤'}</span>
          {/if}
        </div>
      </div>
    </div>

    <h3 class="text-xl font-semibold text-secondary">{name}</h3>
    <p class="text-primary font-medium">{role}</p>
    {#if blurb}
      <p class="text-gray-600 text-sm mt-2">{blurb}</p>
    {/if}

    <div class="mt-4 flex items-center gap-3">
      {#if linkedinUrl}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="p-2 rounded-full border border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-colors"
        >
          <Linkedin size={18} class="text-secondary" />
        </a>
      {:else}
        <button
          type="button"
          aria-label="LinkedIn"
          class="p-2 rounded-full border border-gray-200 opacity-60 cursor-not-allowed"
          ><Linkedin size={18} class="text-secondary" /></button
        >
      {/if}

      {#if instagramUrl}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="p-2 rounded-full border border-gray-200 hover:border-secondary/40 hover:bg-secondary/5 transition-colors"
        >
          <Instagram size={18} class="text-secondary" />
        </a>
      {:else}
        <button
          type="button"
          aria-label="Instagram"
          class="p-2 rounded-full border border-gray-200 opacity-60 cursor-not-allowed"
          ><Instagram size={18} class="text-secondary" /></button
        >
      {/if}

      {#if email}
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          class="p-2 rounded-full border border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-colors"
        >
          <Mail size={18} class="text-secondary" />
        </a>
      {:else}
        <button
          type="button"
          aria-label="Email"
          class="p-2 rounded-full border border-gray-200 opacity-60 cursor-not-allowed"
          ><Mail size={18} class="text-secondary" /></button
        >
      {/if}
    </div>
  </div>
</div>
