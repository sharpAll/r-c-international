import router from "../router";
import store from "../store";

router.beforeEach((to, from, next) => {
  // 获取 token
  const curLan = store.state.language.curLan;
  const toLan = to.path.split("/")[1];
  console.log(curLan);
  console.log(toLan);
  if (curLan != toLan) {
    store.dispatch("setLanguage", toLan);
  }
  next();
});
