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
      <job-filter-sidebar-checkbox-group :mutation="ADD_SELECTED_JOB_TYPES"
                                         :unique-values="uniqueJobTypes"
                                         header="Job type" />
      <job-filter-sidebar-checkbox-group :mutation="ADD_SELECTED_ORGANIZATIONS"
                                         :unique-values="uniqueOrganizations"
                                         header="Organization" />
    </section>
  </div>
</template>
<script>
import Accordion from "@/components/shared/Accordion";
import BaseButton from "@/components/shared/BaseButton";
import JobFilterSidebarCheckboxGroup from "@/components/jobResults/jobFiltersSidebar/JobFilterSidebarCheckboxGroup";

import { useUniqueOrganizations, useUniqueJobTypes} from "@/store/composable";
import {ADD_SELECTED_ORGANIZATIONS, ADD_SELECTED_JOB_TYPES} from "@/store/constants";

export default {
  name: "JobFiltersSidebar",
  components: {
    BaseButton,
    Accordion,
    JobFilterSidebarCheckboxGroup
  },

  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();




    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS
    }
  }
};
</script>
