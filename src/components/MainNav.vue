<template>
  <header class="w-full test-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 max-auto border-b border-solid border-brand-grey-1">
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li class="h-full ml-9 first:ml-0" v-for="menuItem in menuItems" :key="menuItem">
              <a href="" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
<base-button />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BaseButton from './BaseButton.vue'

export default {
  components: { BaseButton },
  name: "MainNav",
  data() {
return {
  company: "New Careers",
  menuItems: ["Teams", "Locations", "Life at New Careers", "How we hire", "Students", "Jobs"]
}
  }
}
</script>
