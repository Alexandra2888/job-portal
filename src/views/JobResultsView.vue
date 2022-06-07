<template>
  <h1 class="text-6xl font-bold">Job Results View</h1>
  <button @click="goHome">Go to Home Page</button>
</template>
<script>
export default {
  name: "JobResultsView",
  methods: {
    goHome() {
      this.$router.push("/")
    }
  }
}
</script>
