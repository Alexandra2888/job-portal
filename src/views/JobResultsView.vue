<template>
  <div class="flex flex-row flex-nowrap w-full">
<job-filters-sidebar></job-filters-sidebar>
    <job-listings></job-listings>
  </div>
</template>
<script>
import JobFiltersSidebar from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebar';
import JobListings from "@/components/jobResults/jobFiltersSidebar/JobListings";
export default {
  name: "JobResultsView",
  components: {
    JobListings,
    JobFiltersSidebar
  }
}
</script>
