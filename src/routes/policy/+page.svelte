<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';
</script>

<svelte:head>
  <title>Store Policy - ETHKL</title>
  <meta
    name="description"
    content="Read ETHKL's store policies including terms of service, privacy policy, and customer guidelines."
  />
</svelte:head>

<main class="min-h-screen bg-linear-to-br from-gray-50 to-white">
  <!-- HERO HEADER -->
  <section
    class="relative py-20 bg-linear-to-r from-primary to-secondary shadow-lg"
  >
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h1
        class="text-5xl font-extrabold text-white drop-shadow-lg animate-fade-down mb-4"
      >
        Store Policy
      </h1>
      <p
        class="text-lg text-white/90 font-medium animate-fade-up opacity-90 mb-2 max-w-2xl mx-auto"
      >
        Our policies and guidelines for a smooth shopping experience
      </p>
    </div>
  </section>

  <!-- NAVIGATION TABS -->
  <nav class="mt-12 mb-12 flex justify-center z-20 relative animate-fade-up">
    <div
      class="flex flex-col gap-2 items-stretch sm:flex-row sm:items-center sm:gap-4"
    >
      <Button
        href="#terms"
        variant="outline"
        size="sm"
        className="rounded-full!">Terms of Service</Button
      >
      <Button
        href="#privacy"
        variant="outline"
        size="sm"
        className="rounded-full!">Privacy Policy</Button
      >
      <Button
        href="#payment"
        variant="outline"
        size="sm"
        className="rounded-full!">Payment Policy</Button
      >
      <Button
        href="#accessibility"
        variant="outline"
        size="sm"
        className="rounded-full!">Accessibility</Button
      >
    </div>
  </nav>

  <!-- TERMS OF SERVICE CARD -->
  <section
    id="terms"
    class="max-w-3xl mx-auto mb-12 animate-fade-up px-6 sm:px-0"
  >
    <div
      class="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-12 lg:py-16"
    >
      <h2
        class="text-3xl font-bold text-secondary mb-8 flex items-center gap-2"
      >
        Terms of Service
      </h2>
      <div class="space-y-8 text-gray-700">
        <div>
          <h3 class="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
          <p>
            By accessing and using the ETHKL website, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to abide by the above, please do not use this service.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">2. Use License</h3>
          <p class="mb-2">
            Permission is granted to temporarily download one copy of the
            materials on ETHKL's website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
          </p>
          <ul class="list-disc ml-8 space-y-1">
            <li>Modify or copy the materials</li>
            <li>
              Use the materials for any commercial purpose or for any public
              display
            </li>
            <li>
              Attempt to reverse engineer any software contained on the website
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">3. Product Information</h3>
          <p>
            We strive to provide accurate product descriptions, images, and
            pricing. However, we do not warrant that product descriptions or
            other content is accurate, complete, reliable, current, or
            error-free. If a product offered by us is not as described, your
            sole remedy is to return it in unused condition.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">4. Prohibited Uses</h3>
          <p class="mb-2">You may not use our website:</p>
          <ul class="list-disc ml-8 space-y-1">
            <li>
              For any unlawful purpose or to solicit others to perform unlawful
              acts
            </li>
            <li>
              To violate any international, federal, provincial, or state
              regulations, rules, laws, or local ordinances
            </li>
            <li>
              To infringe upon or violate our intellectual property rights or
              the intellectual property rights of others
            </li>
            <li>
              To harass, abuse, insult, harm, defame, slander, disparage,
              intimidate, or discriminate
            </li>
            <li>To submit false or misleading information</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PRIVACY POLICY CARD -->
  <section
    id="privacy"
    class="max-w-3xl mx-auto mb-12 animate-fade-up px-6 sm:px-0"
    style="animation-delay:150ms"
  >
    <div
      class="bg-gray-50 rounded-2xl shadow-xl border border-gray-100 px-8 py-12 lg:py-16"
    >
      <h2
        class="text-3xl font-bold text-secondary mb-8 flex items-center gap-2"
      >
        Privacy Policy
      </h2>
      <div class="space-y-8 text-gray-700">
        <div>
          <h3 class="text-xl font-semibold mb-2">Information We Collect</h3>
          <p class="mb-2">
            We collect information you provide directly to us, such as when you
            create an account, make a purchase, or contact us for support. This
            may include:
          </p>
          <ul class="list-disc ml-8 space-y-1">
            <li>Name, email address, and phone number</li>
            <li>Billing and shipping addresses</li>
            <li>
              Payment information (processed securely through third-party
              providers)
            </li>
            <li>Account preferences and purchase history</li>
            <li>Communications with our customer service team</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">
            How We Use Your Information
          </h3>
          <p class="mb-2">We use the information we collect to:</p>
          <ul class="list-disc ml-8 space-y-1">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Send you updates about your orders and account</li>
            <li>Improve our website and services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Information Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We may share your information with service
            providers who assist us in operating our website and conducting our
            business, as long as they agree to keep this information
            confidential.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PAYMENT POLICY CARD -->
  <section
    id="payment"
    class="max-w-3xl mx-auto mb-12 animate-fade-up px-6 sm:px-0"
    style="animation-delay:300ms"
  >
    <div
      class="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-12 lg:py-16"
    >
      <h2
        class="text-3xl font-bold text-secondary mb-8 flex items-center gap-2"
      >
        Payment Policy
      </h2>
      <div class="space-y-8 text-gray-700">
        <div>
          <h3 class="text-xl font-semibold mb-2">Accepted Payment Methods</h3>
          <p class="mb-2">We accept the following payment methods:</p>
          <ul class="list-disc ml-8 space-y-1">
            <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
            <li>Debit cards</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
            <li>Shop Pay</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Payment Processing</h3>
          <p>
            All payments are processed securely through our payment partners. We
            do not store your complete payment information on our servers. Your
            payment details are encrypted and processed in compliance with PCI
            DSS standards.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Pricing and Currency</h3>
          <p>
            All prices are displayed in US Dollars (USD) unless otherwise
            specified. Prices are subject to change without notice. We reserve
            the right to correct any pricing errors, even after an order has
            been placed.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Refunds and Chargebacks</h3>
          <p>
            Refunds are processed according to our return policy. If you have
            any issues with your payment or need to dispute a charge, please
            contact our customer service team before initiating a chargeback. We
            will work with you to resolve any payment issues promptly.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ACCESSIBILITY CARD -->
  <section
    id="accessibility"
    class="max-w-3xl mx-auto mb-12 animate-fade-up px-6 sm:px-0"
    style="animation-delay:450ms"
  >
    <div
      class="bg-gray-50 rounded-2xl shadow-xl border border-gray-100 px-8 py-12 lg:py-16"
    >
      <h2
        class="text-3xl font-bold text-secondary mb-8 flex items-center gap-2"
      >
        Accessibility
      </h2>
      <div class="space-y-8 text-gray-700">
        <div>
          <h3 class="text-xl font-semibold mb-2">Our Commitment</h3>
          <p>
            ETHKL is committed to ensuring digital accessibility for all users,
            including those with disabilities. We strive to provide a website
            that is accessible to the widest possible audience, regardless of
            technology or ability.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Accessibility Features</h3>
          <ul class="list-disc ml-8 space-y-1">
            <li>Keyboard navigation support</li>
            <li>Screen reader compatibility</li>
            <li>High contrast mode support</li>
            <li>Alternative text for images</li>
            <li>Scalable text and interface elements</li>
            <li>Clear and consistent navigation</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Feedback and Support</h3>
          <p>
            If you encounter any accessibility barriers on our website, please
            contact us at <a
              href="mailto:accessibility@ethkl.com"
              class="underline text-primary hover:text-secondary"
              >accessibility@ethkl.com</a
            >. We welcome your feedback and will work to address any issues
            promptly.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT CTA (reused component) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Questions About Our Policies?"
    description={`If you have any questions about our store policies, please don't hesitate to contact us.`}
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
