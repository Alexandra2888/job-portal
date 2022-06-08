import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import MainNav from "@/components/navigation/MainNav";


library.add(faSearch);

const app = createApp(App);
app.component("main-nav", MainNav)
app.use(router);
app.mount("#app");


