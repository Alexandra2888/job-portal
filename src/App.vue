<template>
  <main-nav/>
  <hero></hero>
</template>
<script>
import MainNav from "@/components/navigation/MainNav";
import Hero from "@/components/jobSearch/Hero";
export default {
  name: "App",
  components: {MainNav, Hero}
}
</script>
