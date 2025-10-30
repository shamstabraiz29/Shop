<script lang="ts">
  import { Button } from '$lib';
  import { Input } from '$lib/components/ui/input';

  let email = '';
  let subscribed = false;

  // Footer navigation data
  const footerSections = [
    {
      title: 'Customer Care',
      links: [
        { text: 'FAQ', href: '/faq' },
        { text: 'Shipping & Returns', href: '/shipping' },
        { text: 'Store Policy', href: '/policy' },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          text: 'Instagram',
          href: 'https://instagram.com/ethkl',
          external: true,
        },
        { text: 'Twitter', href: 'https://twitter.com/ethkl', external: true },
        {
          text: 'Facebook',
          href: 'https://facebook.com/ethkl',
          external: true,
        },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'The Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Shop Women', href: '/women' },
        { text: 'Shop Men', href: '/men' },
        { text: 'Shop All', href: '/shop' },
      ],
    },
  ];

  function handleSubmit() {
    if (email && subscribed) {
      // Handle newsletter subscription
      console.log('Subscribed with email:', email);
      email = '';
      subscribed = false;
    }
  }
</script>

<footer class="bg-gradient-to-br from-gray-50 to-gray-100">
  <div class="max-w-[90%] mx-auto py-16 px-6 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <!-- Dynamic Footer Sections -->
      {#each footerSections as section}
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-4">
            {section.title}
          </h3>
          <ul class="space-y-2">
            {#each section.links as link}
              <li>
                <a
                  href={link.href}
                  class="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.text}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}

      <!-- Newsletter Signup Column -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          Sign up for special offers
        </h3>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div>
            <label for="email" class="block text-sm text-gray-600 mb-1"
              >Enter your email here *</label
            >
            <Input
              type="email"
              id="email"
              bind:value={email}
              required
              placeholder="your@email.com"
            />
          </div>

          <div class="flex items-start space-x-2">
            <input
              type="checkbox"
              id="newsletter"
              bind:checked={subscribed}
              required
              class="mt-1 h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500 bg-white"
            />
            <label for="newsletter" class="text-sm text-gray-600">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>
          <div class="w-full">
            <Button type="submit" className="w-full" variant="primary" size="md"
              >Submit</Button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Copyright Bar -->
  <div class="bg-secondary py-4 text-center">
    <p class="text-white text-sm">
      © 2025 ETHKL. Created with passion and precision by
      <a
        href="https://www.linkedin.com/in/shamstabraizbaig/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white font-semibold hover:text-primary transition-colors duration-200 decoration-primary/50 hover:decoration-primary"
        style="font-family: 'Poppins', 'Montserrat', 'Nunito', 'Open Sans', 'Lato', 'Source Sans Pro', sans-serif; font-weight: 500; letter-spacing: 0.5px;"
      >
        Shams Tabraiz Baig
      </a>.
    </p>
  </div>
  <!-- Floating Chat Button -->
  <!-- <div class="fixed bottom-[70px] right-6 z-50">
    <button
      class="bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span>😊</span>
      <span>Let's Chat!</span>
    </button>
  </div> -->
</footer>
