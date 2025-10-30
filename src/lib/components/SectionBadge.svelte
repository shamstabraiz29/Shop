<script>
  export let text = '';
  export let className = '';
</script>

<div
  class={`inline-flex items-center gap-2 bg-linear-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full border border-primary/20 mb-4 ${className}`}
>
  <span class="h-2 w-2 rounded-full bg-primary"></span>
  <span class="text-sm font-semibold">{text}</span>
</div>
