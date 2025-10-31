<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from '$lib/components/ui/select';
  import { Search } from 'lucide-svelte';
  import bgImage from '$lib/assets/images/bg-1.jpg';
  import CtaSection from '$lib/sections/home/CtaSection.svelte';

  // FAQ page
  let searchQuery = '';
  let selectedCategory = 'all';

  const faqData = [
    {
      category: 'orders',
      question: 'How do I place an order?',
      answer:
        "Simply browse our collection, select your desired items, choose your size and color, then add them to your cart. Proceed to checkout, enter your shipping information, and complete your payment. You'll receive an order confirmation email once your order is placed.",
    },
    {
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer:
        'You can modify or cancel your order within 2 hours of placing it. After this time, your order will be processed and cannot be changed. Please contact our customer service team immediately if you need to make changes.',
    },
    {
      category: 'shipping',
      question: 'What are your shipping options?',
      answer:
        'We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $75. International shipping is available to select countries with delivery times varying by location.',
    },
    {
      category: 'shipping',
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days. International orders typically take 7-14 business days depending on the destination country.',
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for unworn items with original tags attached. Items must be in original condition. Returns are free within the US, and we provide a prepaid return label. Refunds are processed within 5-7 business days after we receive your return.',
    },
    {
      category: 'returns',
      question: 'How do I return an item?',
      answer:
        "To return an item, log into your account, go to your order history, and select the items you want to return. Print the prepaid return label, package your items securely, and drop off at any authorized shipping location. You'll receive a confirmation email once we process your return.",
    },
    {
      category: 'sizing',
      question: 'How do I find my correct size?',
      answer:
        "We provide detailed size charts for each product. Measure yourself according to our guidelines and compare with the size chart. If you're between sizes, we recommend sizing up. Our customer service team is also available to help you find the perfect fit.",
    },
    {
      category: 'sizing',
      question: 'Do you offer size exchanges?',
      answer:
        "Yes! If you need a different size, you can exchange your item within 30 days. Simply contact our customer service team, and we'll guide you through the exchange process. Exchanges are free within the US.",
    },
    {
      category: 'products',
      question: 'What materials do you use?',
      answer:
        "We use high-quality, sustainable materials including organic cotton, recycled polyester, Tencel, and other eco-friendly fabrics. Each product page lists the specific materials used. We're committed to sustainable fashion practices.",
    },
    {
      category: 'products',
      question: 'How do I care for my Ahmad items?',
      answer:
        "Care instructions are provided on each product's care label. Generally, we recommend machine washing in cold water, gentle cycle, and air drying or low heat tumble dry. Avoid bleach and iron on high heat unless specified.",
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer:
        'Click on "Sign Up" in the top navigation, enter your email address and create a password, then verify your email. Having an account allows you to track orders, save favorites, and enjoy faster checkout.',
    },
    {
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer:
        'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    },
  ];

  $: filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'orders', label: 'Orders' },
    { value: 'shipping', label: 'Shipping' },
    { value: 'returns', label: 'Returns' },
    { value: 'sizing', label: 'Sizing' },
    { value: 'products', label: 'Products' },
    { value: 'account', label: 'Account' },
  ];
</script>

<svelte:head>
  <title>FAQ - Ahmad</title>
  <meta
    name="description"
    content="Find answers to frequently asked questions about Ahmad fashion store, including orders, shipping, returns, and more."
  />
</svelte:head>

<main class="min-h-screen bg-white">
  <!-- Page Header -->
  <section class="bg-linear-to-r from-primary to-secondary py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h1 class="text-4xl lg:text-5xl font-bold text-white text-center">
        Frequently Asked Questions
      </h1>
      <p class="text-lg text-white/90 text-center mt-4 max-w-2xl mx-auto">
        Find answers to common questions about shopping with Ahmad
      </p>
    </div>
  </section>

  <!-- Search and Filter -->
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Search Bar -->
        <div class="flex-1 relative">
          <div
            class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
          >
            <Search class="size-4 text-gray-500" />
          </div>
          <Input
            type="search"
            bind:value={searchQuery}
            placeholder="Search questions..."
            class="w-full pl-10 pr-4 py-3 text-base rounded-lg transition-all duration-200 border border-gray-300 focus:outline-none focus:border-gray-400 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <!-- Category Filter -->
        <div class="md:w-64">
          <Select
            value={selectedCategory}
            onValueChange={(value) => (selectedCategory = value)}
            type="single"
          >
            <SelectTrigger class="w-full">
              {categories.find((cat) => cat.value === selectedCategory)
                ?.label || 'Select category'}
            </SelectTrigger>
            <SelectContent>
              {#each categories as category}
                <SelectItem value={category.value}>
                  {category.label}
                </SelectItem>
              {/each}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Content -->
  <section class="pt-4 pb-10">
    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      {#if filteredFAQs.length === 0}
        <div class="text-center py-12">
          <div
            class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <span class="text-4xl">❓</span>
          </div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            No questions found
          </h2>
          <p class="text-gray-600 mb-8">
            Try adjusting your search terms or browse all categories.
          </p>
          <button
            on:click={() => {
              searchQuery = '';
              selectedCategory = 'all';
            }}
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      {:else}
        <div class="space-y-6">
          {#each filteredFAQs as faq, index}
            <div
              class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Contact CTA (reused component) -->
  <CtaSection
    backgroundSrc={bgImage}
    backgroundPosition="center"
    title="Still have questions?"
    description={`Our customer service team is here to help you with any questions or concerns.`}
    primaryButton={{
      label: 'Contact Us',
      href: '/contact',
      variant: 'primary',
      size: 'md',
    }}
    secondaryButton={{
      label: 'Email Support',
      href: 'mailto:support@ahmad.com',
      variant: 'outline',
      size: 'md',
    }}
  />
</main>
