<template>
  <accordion header="Job Type">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType" class="w-1/2 h-8">
            <input :id="jobType" type="checkbox" v-model="selectedJobTypes"
                   :value="jobType" class="mr-3" @change="selectJobType" />
            <label :for="jobType">{{jobType}}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Accordion from "@/components/shared/Accordion";
import {
  UNIQUE_JOB_TYPES,
  ADD_SELECTED_JOB_TYPES
} from "@/store/constants";

export default {
  name: "JobFiltersSidebarJobTypes",
  data() {
    return {
      selectedJobTypes: []
    }
  },
  components: {Accordion},
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES])
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    }
  },
}
</script>
