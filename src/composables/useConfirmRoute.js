import {useRoute} from "vue-router"
import { computed } from "vue";

const useConfirmRoute = (routeName) => {
const route = useRoute();
computed(() => route.name === routeName )
}


export default useConfirmRoute;
