import Store from "./services/Store.js";
import Router from "./services/Router.js";
import { loadData } from "./services/Menu.js";

import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";

window.app = {
  store: Store,
  router: Router,
};

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
