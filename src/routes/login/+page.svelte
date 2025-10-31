<script lang="ts">
  // Login page
  let email = '';
  let password = '';
  let rememberMe = false;
  let isLoading = false;

  function handleLogin() {
    isLoading = true;
    // Simulate login process
    setTimeout(() => {
      isLoading = false;
      // Handle login logic here
    }, 1000);
  }
</script>

<svelte:head>
  <title>Login - Ahmad</title>
  <meta
    name="description"
    content="Sign in to your Ahmad account to access your orders, wishlist, and exclusive offers."
  />
</svelte:head>

<main
  class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-secondary mb-2">Welcome Back</h1>
      <p class="text-gray-600">Sign in to your Ahmad account</p>
    </div>

    <!-- Login Form -->
    <div class="bg-white py-8 px-6 shadow-lg rounded-lg">
      <form on:submit|preventDefault={handleLogin} class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-secondary mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            bind:value={email}
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium text-secondary mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            bind:value={password}
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              bind:checked={rememberMe}
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-600">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="/forgot-password"
              class="text-primary hover:text-opacity-80"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          class="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {#if isLoading}
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
              Signing in...
            </span>
          {:else}
            Sign In
          {/if}
        </button>
      </form>

      <!-- Divider -->
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <!-- Social Login -->
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="text-lg">📘</span>
            <span class="ml-2">Facebook</span>
          </button>

          <button
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="text-lg">🔍</span>
            <span class="ml-2">Google</span>
          </button>
        </div>
      </div>

      <!-- Sign Up Link -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <a
            href="/register"
            class="text-primary hover:text-opacity-80 font-medium"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="text-center">
      <a href="/" class="text-secondary hover:text-primary transition-colors">
        ← Back to Home
      </a>
    </div>
  </div>
</main>
