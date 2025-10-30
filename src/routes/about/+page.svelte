<script lang="ts">
  // About page
  import ValueCard from '$lib/components/ValueCard.svelte';
  import { Gem, Leaf, HeartHandshake } from 'lucide-svelte';
  import TeamCard from '$lib/components/TeamCard.svelte';
  import storyMain from '$lib/assets/images/w-3.jpeg';
  import storyMen from '$lib/assets/images/m-2.jpeg';
  import storyWomen from '$lib/assets/images/w-4.jpeg';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import SectionBadge from '$lib/components/SectionBadge.svelte';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
</script>

<svelte:head>
  <title>About Us - ETHKL</title>
  <meta
    name="description"
    content="Learn about ETHKL's mission to provide quality fashion for everyone. Discover our story and values."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-secondary py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        About ETHKL
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        Discover our story, mission, and commitment to bringing you the best in
        fashion
      </p>
    </div>
  </section>

  <!-- Our Story -->
  <section class="py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <SectionBadge text="Since 2020" />
          <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span
              class="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary"
              >Our Story</span
            >
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-5">
            ETHKL began as a family passion project with a simple belief: great
            style should feel effortless and be within reach. From a
            neighborhood boutique to a global storefront, our journey has been
            fueled by community and craftsmanship.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            We curate timeless pieces that balance comfort, quality, and
            value—so you can wear confidence every day. Each collection is
            carefully selected to reflect modern tastes without compromising
            durability.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              class="rounded-xl border border-primary/20 bg-white/70 backdrop-blur px-4 py-3"
            >
              <div class="text-2xl font-bold text-primary">10K+</div>
              <div class="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div
              class="rounded-xl border border-secondary/20 bg-white/70 backdrop-blur px-4 py-3"
            >
              <div class="text-2xl font-bold text-secondary">500+</div>
              <div class="text-gray-600 text-sm">Curated Products</div>
            </div>
            <div
              class="rounded-xl border border-primary/20 bg-white/70 backdrop-blur px-4 py-3"
            >
              <div class="text-2xl font-bold text-primary">50+</div>
              <div class="text-gray-600 text-sm">Countries Served</div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 relative">
          <div
            class="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <img
              src={storyMain}
              alt="ETHKL collection"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-transparent"
            ></div>
          </div>
          <div class="hidden sm:block">
            <div
              class="absolute -bottom-6 -left-6 w-40 sm:w-48 rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <img
                src={storyMen}
                alt="Menswear detail"
                class="h-28 sm:h-32 w-full object-cover"
              />
            </div>
            <div
              class="absolute -top-6 -right-4 w-40 sm:w-48 rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <img
                src={storyWomen}
                alt="Womenswear detail"
                class="h-28 sm:h-32 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <div class="bg-linear-to-br from-gray-50 to-gray-100">
    <div class="max-w-7xl mx-auto py-16 lg:py-24 px-6 lg:px-0">
      <div class="flex flex-col items-center">
        <SectionBadge text="Company Spirit" />
      </div>
      <h2
        class="text-4xl lg:text-5xl font-extrabold text-secondary text-center mb-16 tracking-tight drop-shadow-sm"
      >
        Our Values
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ValueCard
          title="Quality First"
          description="We carefully select every item to ensure it meets our high standards for materials, craftsmanship, and durability."
          Icon={Gem}
          borderClass="border-primary/90 hover:border-primary/70"
          iconBgClass="bg-linear-to-tr from-primary to-secondary"
          titleClass="text-primary"
          heightClass="min-h-[410px]"
        />
        <ValueCard
          title="Sustainability"
          description="We are committed to sustainable fashion, partnering with suppliers who share our commitment to the environment."
          Icon={Leaf}
          borderClass="border-secondary/90 hover:border-secondary/70"
          iconBgClass="bg-linear-to-tr from-secondary to-primary/80"
          titleClass="text-secondary"
          heightClass="min-h-[410px]"
        />
        <ValueCard
          title="Customer Care"
          description="Your satisfaction is our top priority. We deliver attentive service and wholehearted support throughout your journey with us."
          Icon={HeartHandshake}
          borderClass="border-primary/90 hover:border-primary/70"
          iconBgClass="bg-linear-to-tr from-secondary to-primary/80"
          titleClass="text-primary"
          heightClass="min-h-[410px]"
        />
      </div>
    </div>
  </div>

  <!-- Team Section -->
  <section class="py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-0">
      <div class="text-center mb-12">
        <SectionBadge text="People behind ETHKL" />
        <h2 class="text-3xl lg:text-4xl font-bold text-secondary">
          Meet Our Team
        </h2>
        <p class="text-gray-600 mt-3 max-w-2xl mx-auto">
          A small team with big passion for thoughtful design and a memorable
          customer experience.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamCard
          name="Sarah Johnson"
          role="Founder & CEO"
          email="hello@ethkl.com"
          avatarEmoji="👩"
          blurb="Passionate about fashion and customer experience; leads with empathy and clarity."
          ringFrom="from-primary"
          ringTo="to-secondary"
        />
        <TeamCard
          name="Michael Chen"
          role="Head of Design"
          email="design@ethkl.com"
          avatarEmoji="👨"
          blurb="Crafts cohesive collections and elevates product quality through details."
          ringFrom="from-secondary"
          ringTo="to-primary"
        />
        <TeamCard
          name="Emily Rodriguez"
          role="Customer Success Manager"
          email="support@ethkl.com"
          avatarEmoji="👩"
          blurb="Champions seamless experiences and builds long-term customer relationships."
          ringFrom="from-primary"
          ringTo="to-secondary"
        />
      </div>
    </div>
  </section>

  <!-- Contact CTA (reused component, same design as home CTA) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Get in Touch"
    description={`Have questions about our products or need styling advice? We'd love to hear from you!`}
    primaryButton={{
      label: 'Contact Us',
      href: '/contact',
      variant: 'primary',
      size: 'md',
    }}
    secondaryButton={{
      label: 'Email Support',
      href: 'mailto:support@ethkl.com',
      variant: 'outline',
      size: 'md',
    }}
  />
</main>
