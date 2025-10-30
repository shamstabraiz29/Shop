<script lang="ts">
  import { Input } from '$lib/components/ui/input';

  export let title: string = 'Be the first to know';
  export let description: string =
    'Join our newsletter for new drops, seasonal edits, and exclusive offers.';
  export let buttonLabel: string = 'Subscribe';
  function onSubmit() {
    // hook up submission later
  }
</script>

<section
  class="relative py-16 lg:py-24 bg-linear-to-r from-primary to-secondary"
>
  <div class="max-w-5xl mx-auto px-6 lg:px-12">
    <div
      class="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
    >
      <div
        class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-black/10 blur-3xl"
      ></div>

      <div
        class="relative grid grid-cols-1 lg:grid-cols-5 items-center p-6 sm:p-10 gap-8"
      >
        <div class="lg:col-span-3 text-center lg:text-left">
          <h2
            class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
          >
            {title}
          </h2>
          <p class="mt-3 text-base lg:text-lg text-white/85">
            {description}
          </p>

          <form class="mt-6" on:submit|preventDefault={onSubmit}>
            <div
              class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <div class="relative flex-1">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  class="w-full h-12 pl-11 pr-4 rounded-xl border-0 focus:ring-2 focus:ring-white/60 text-gray-900 placeholder:text-gray-500"
                  aria-label="Email address"
                  required
                />
                <span
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >@</span
                >
              </div>
              <button
                type="submit"
                class="h-12 px-6 rounded-xl bg-white text-primary font-semibold shadow hover:bg-white/90 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                {buttonLabel}
              </button>
            </div>
            <p class="mt-3 text-xs text-white/80">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>

        <div class="lg:col-span-2">
          <div
            class="mx-auto max-w-sm rounded-xl bg-white/90 p-5 shadow-lg ring-1 ring-black/5"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold"
              >
                %
              </div>
              <div>
                <p class="text-sm font-semibold text-secondary">
                  Exclusive perks
                </p>
                <p class="text-xs text-gray-600">
                  Early access, members-only promos
                </p>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3 text-center">
              <div class="rounded-lg border border-gray-200 bg-white py-3">
                <p class="text-xl font-bold text-secondary">15%</p>
                <p class="text-xs text-gray-500">First order</p>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white py-3">
                <p class="text-xl font-bold text-secondary">48h</p>
                <p class="text-xs text-gray-500">Early access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
