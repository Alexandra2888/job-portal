<template>
  <accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="w-1/2 h-8">
            <input :id="organization" type="checkbox" v-model="selectedOrganizations"
                   :value="organization" class="mr-3" @change="selectOrganization" />
            <label :for="organization">{{organization}}</label>
          </li>
        </ul>
      </fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value"
            class="w-1/2 h-8">
          <input :id="value"
                 v-model="selectedValues"
                 :value="value"
                 type="checkbox"
                 class="mr-3"
                 :data-test="value"
                 @change="selectValue"
          >
          <label :for="value" data-test="value">
            {{value}}
          </label>
        </li>
      </ul>
    </div>
  </accordion>
</template>
<script>
import {ref} from "vue";
import { useStore} from "vuex";
import { useRouter} from "vue-router";
import Accordion from "@/components/shared/Accordion";
export default {
  name: "JobFiltersSidebarCheckboxGroup",
  components: {Accordion},
  props: {
    header: {
      type: String,
      required: true
    },
    uniqueValues: {
      type: String,
      required: true
    },
    mutation: {
      type: String,
      required: true
    }
  },
  setup(props) {

    const router = useRouter();
    const store = useStore();
    const selectedValues = ref([]);

    const selectValue = () => {
     store.commit(props.mutation, selectedValues.value);
     router.push({name: "JobResults"})
    }
    return {
      selectedValues,
      selectValue,

    }
  }
}
</script>
