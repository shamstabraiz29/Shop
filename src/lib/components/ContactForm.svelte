<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from '$lib/components/ui/select';

  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let isSubmitting = false;
  let hasSubmitted = false;
  let errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  } = {};

  const subjects = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'order', label: 'Order Support' },
    { value: 'return', label: 'Returns & Exchanges' },
    { value: 'sizing', label: 'Sizing Help' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'URGENT', label: 'URGENT' },
    { value: 'other', label: 'Other' },
  ];

  function validate() {
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = 'Full name is required';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) nextErrors.email = 'Email is required';
    else if (!emailPattern.test(email))
      nextErrors.email = 'Enter a valid email address';
    if (!subject) nextErrors.subject = 'Please select a subject';
    if (!message.trim() || message.trim().length < 10)
      nextErrors.message = 'Message must be at least 10 characters';
    errors = nextErrors;
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit() {
    hasSubmitted = true;
    if (!validate()) return;
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
      name = '';
      email = '';
      subject = '';
      message = '';
      errors = {};
      hasSubmitted = false;
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1000);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
        Full Name *
      </label>
      <Input
        type="text"
        id="name"
        bind:value={name}
        required
        placeholder="Your full name"
        aria-invalid={hasSubmitted && errors.name ? 'true' : 'false'}
        class={hasSubmitted && errors.name
          ? 'border-red-500 focus:border-red-500'
          : ''}
      />
      {#if hasSubmitted && errors.name}
        <p class="mt-1 text-sm text-red-600">{errors.name}</p>
      {/if}
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Email Address *
      </label>
      <Input
        type="email"
        id="email"
        bind:value={email}
        required
        placeholder="your@email.com"
        aria-invalid={hasSubmitted && errors.email ? 'true' : 'false'}
        class={hasSubmitted && errors.email
          ? 'border-red-500 focus:border-red-500'
          : ''}
      />
      {#if hasSubmitted && errors.email}
        <p class="mt-1 text-sm text-red-600">{errors.email}</p>
      {/if}
    </div>
  </div>

  <div>
    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
      Subject *
    </label>
    <Select
      value={subject}
      onValueChange={(value) => (subject = value)}
      type="single"
    >
      <SelectTrigger id="subject" class="w-full">
        {subjects.find((s) => s.value === subject)?.label || 'Select a subject'}
      </SelectTrigger>
      <SelectContent>
        {#each subjects as s}
          <SelectItem value={s.value}>{s.label}</SelectItem>
        {/each}
      </SelectContent>
    </Select>
    {#if hasSubmitted && errors.subject}
      <p class="mt-1 text-sm text-red-600">{errors.subject}</p>
    {/if}
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
      Message *
    </label>
    <textarea
      id="message"
      bind:value={message}
      required
      rows="6"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-gray-400"
      placeholder="Tell us how we can help you..."
    ></textarea>
    {#if hasSubmitted && errors.message}
      <p class="mt-1 text-sm text-red-600">{errors.message}</p>
    {/if}
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    class="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
  >
    {#if isSubmitting}
      <span class="flex items-center justify-center">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Sending...
      </span>
    {:else}
      Send Message
    {/if}
  </button>
</form>
