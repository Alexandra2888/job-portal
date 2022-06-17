<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="jobType in uniqueJobTypes" :key="jobType" class="w-1/2 h-8">
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
import {ref} from "vue";
import {useUniqueJobTypes} from "@/store/composable";
import {useStore} from "vuex";
import Accordion from "@/components/shared/Accordion";
import { useRouter} from "vue-router"
import {
  ADD_SELECTED_JOB_TYPES
} from "@/store/constants";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {Accordion},
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref("");
    const uniqueJobTypes = useUniqueJobTypes();

    const selectJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes);
      router.push({name: "JobResults"})
    }

    return {
      selectedJobTypes,
      uniqueJobTypes,
      selectJobType
    }
  },
}
</script>
