<template>
  <accordion header="Organizations">
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
        <li v-for="organization in uniqueOrganizations" :key="organization"
            class="w-1/2 h-8">
          <input :id="organization"
                 v-model="selectedOrganizations"
                 :value="organization"
                 type="checkbox"
                 class="mr-3"
                 :data-test="organization"
                 @change="selectOrganization"
          >
          <label :for="organization" data-test="organization">
            {{organization}}
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
import {useUniqueOrganizations} from "@/store/composable";
import Accordion from "@/components/shared/Accordion";
import { ADD_SELECTED_ORGANIZATIONS} from "@/store/constants";

export default {
  name: "JobFiltersSidebarOrganization",
  components: {Accordion},
  setup() {

    const router = useRouter();
    const store = useStore();
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults"})
    }
    return {
      selectedOrganizations,
      uniqueOrganizations,
      selectOrganization
    }
  }
}
</script>
