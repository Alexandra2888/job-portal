<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayJobs" :key="job.id" :job="job"></job-listing>
    </ol>

    <div class="mt-8 mx-auto">
<div class="text-sm flex-row flex-nowrap">
  <p class="text-sm flex-grow">Page {{currentPage}}</p>

  <div class="flex items-center justify-center">
    <router-link :to="{name: 'JobResults', query: {page: previousPage}}" v-if="previousPage" class="mx-3 text-sm font-semi-bold text-brand-blue-1">Previous</router-link>
    <router-link :to="{name: 'JobResults', query: {page: nextPage}}" v-if="nextPage" class="mx-3 text-sm font-semi-bold text-brand-blue-1">Next</router-link>
  </div>
</div>
    </div>
  </main>
</template>
<script>
import JobListing from "@/components/jobResults/JobListing";
import {mapActions, mapState} from "vuex";
import { FETCH_JOBS} from "@/store";

export default {
  name: "JobListings",
  components: {JobListing},
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage(){
      const nextPage = this.currentPage + 1;
      const maxPage = this.jobs.length / 10;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["jobs"])
  },
  async mounted() {
this.FETCH_JOBS();
  }
}
</script>
