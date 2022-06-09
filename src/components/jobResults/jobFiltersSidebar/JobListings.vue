<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" :job="job"></job-listing>
    </ol>
  </main>
</template>
<script>
import JobListing from "@/components/jobResults/JobListing";
import axios from "axios";

export default {
  name: "JobListings",
  components: {JobListing},
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost/jobs");
    this.jobs = response.data;
  }
}
</script>
