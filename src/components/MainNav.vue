<template>
  <header class="w-full test-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 max-auto border-b border-solid border-brand-grey-1">
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
return {
  company: "New Careers"
}
  }
}
</script>
