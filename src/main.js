import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import MainNav from "@/components/navigation/MainNav";
import store from './store';
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faAngleDown, faAngleUp, faSearch} from "@fortawesome/free-solid-svg-icons";


library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);


const app = createApp(App).use(store);
app.component("main-nav", MainNav);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router);
app.mount("#app");


