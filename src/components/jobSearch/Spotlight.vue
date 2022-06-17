<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
          :img="spotlight.img"
          :title="spotlight.title"
          :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
<script>
import { ref, onMounted} from "vue";
import axios from 'axios';
export default {
  name: 'Spotlight',

  setup() {
    const spotlights = ref([])

    const getSpotlights = async () => {
      const response = await axios.get("  http://localhost:8080/spotlights");
      spotlights.value = response.data;
    };

    onMounted(getSpotlights);


    return {
      spotlights
    }
  },
}
</script>
