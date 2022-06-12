<template>
  <div class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
       <h3 class="my-4 text-base font-semi-bold"> What do you want to do?</h3>
        <div class="flex items-center text-sm">
        <base-button type="secondary" text="Clear filters" />
        </div>
      </div>
      <accordion header="Degree" />
      <accordion header="Job Type">
        <p>Placeholder for now</p>
      </accordion>
<job-filters-sidebar-organization />
    </section>
  </div>
</template>
<script>
import Accordion from "@/components/shared/Accordion";
import BaseButton from "@/components/shared/BaseButton";
import JobFiltersSidebarOrganization from "@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarOrganizations";
export default {
  name: "JobFiltersSidebar",
  components: {JobFiltersSidebarOrganization, BaseButton, Accordion}

};
</script>
