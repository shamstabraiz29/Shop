<script lang="ts">
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import {
    Mail,
    Headphones,
    Megaphone,
    Clock3,
    Zap,
    MessageCircle,
    Instagram,
    Twitter,
    Facebook,
    Pin,
  } from 'lucide-svelte';
  import ContactInfoCard from '$lib/components/ContactInfoCard.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
  <title>Contact Us - ETHKL</title>
  <meta
    name="description"
    content="Get in touch with ETHKL customer service. We're here to help with any questions about our fashion products."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-secondary py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        Contact Us
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        We'd love to hear from you. Send us a message and we'll respond as soon
        as possible.
      </p>
    </div>
  </section>

  <!-- Contact Information -->
  <section class="py-16 lg:py-24">
    <div class="max-w-[92%] lg:max-w-[75%] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold text-secondary mb-8">
            Send us a Message
          </h2>

          <ContactForm />
        </div>

        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold text-secondary">Get in Touch</h2>
          <p class="text-gray-600 py-4">
            Reach us via email, view our hours, or connect on social.
          </p>

          <div class="grid grid-cols-1 gap-5">
            <!-- Email -->
            <ContactInfoCard
              icon={Mail}
              title="Email Us"
              description="For general inquiries and support"
              linkHref="mailto:hello@ethkl.com"
              linkText="hello@ethkl.com"
              iconBgClass="bg-linear-to-br from-primary to-secondary"
            />

            <!-- WhatsApp -->
            <ContactInfoCard
              icon={MessageCircle}
              title="WhatsApp"
              description="Chat with us on WhatsApp"
              linkHref="https://wa.me/03555477964"
              linkText="03555477964"
              iconBgClass="bg-linear-to-br from-primary to-secondary"
            />

            <!-- Response Time -->
            <ContactInfoCard
              icon={Zap}
              title="Response Time"
              description="We typically respond within 24 hours during business days. For urgent matters, please mention &quot;URGENT&quot; in your subject line."
              iconBgClass="bg-linear-to-br from-primary to-secondary"
            />
          </div>
        </div>
      </div>
      <!-- Social Media -->
      <div class="mt-10 lg:mt-24">
        <h3 class="text-lg font-semibold text-secondary text-center">
          Follow Us
        </h3>
        <SocialLinks
          items={[
            {
              href: 'https://instagram.com/ethkl',
              label: 'Instagram',
              icon: Instagram,
            },
            {
              href: 'https://twitter.com/ethkl',
              label: 'Twitter',
              icon: Twitter,
            },
            {
              href: 'https://facebook.com/ethkl',
              label: 'Facebook',
              icon: Facebook,
            },
            {
              href: 'https://pinterest.com/ethkl',
              label: 'Pinterest',
              icon: Pin,
            },
          ]}
        />
      </div>
    </div>
  </section>

  <!-- FAQ CTA (reused component) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Looking for Quick Answers?"
    description={`Check out our FAQ section for answers to common questions about orders, shipping, and returns.`}
    primaryButton={{
      label: 'Visit FAQ',
      href: '/faq',
      variant: 'primary',
      size: 'md',
    }}
  />
</main>
