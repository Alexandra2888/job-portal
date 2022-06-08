<template>
  <div>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
    <button @click="goToHome">Go to Home Page</button>
  </div>
</template>
<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({path: "/"})
    }
  }
}
</script>
