import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./config/locale/config";
import { router } from "./router/router";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
