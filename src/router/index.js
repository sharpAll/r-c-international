import Vue from "vue";
import VueRouter from "vue-router";
//布局组件
import Layout from "@/components/Layout.vue";
//首页
import CHHome from "@/views/CH/home";
//关于我们
import CHAboutUs from "@/views/CH/aboutUs";
//产品
import CHProduct from "@/views/CH/product";
//QA
import CHQa from "@/views/CH/qa";
//联系我们
import CHContact from "@/views/CH/contact";
/****************英文 ***********/
//首页
import ENHome from "@/views/EN/home";
//关于我们
import ENAboutUs from "@/views/EN/aboutUs";
//产品
import ENProduct from "@/views/EN/product";
//QA
import ENQa from "@/views/EN/qa";
//联系我们
import ENContact from "@/views/EN/contact";
/****************马来语 ***********/
//首页
import MYHome from "@/views/MY/home";
//关于我们
import MYAboutUs from "@/views/MY/aboutUs";
//产品
import MYProduct from "@/views/MY/product";
//QA
import MYQa from "@/views/MY/qa";
//联系我们
import MYContact from "@/views/MY/contact";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "CH/home",
    children: [
      {
        path: "CH/home",
        component: CHHome,
        name: "CH/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "CH/aboutUs/:type",
        component: CHAboutUs,
        name: "CH/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "CH/product/:type",
        component: CHProduct,
        name: "CH/product",
        meta: { title: "产品", parent: "" }
      },
      {
        path: "CH/qa",
        component: CHQa,
        name: "CH/qa",
        meta: { title: "Q&A", parent: "" }
      },
      {
        path: "CH/contact",
        component: CHContact,
        name: "CH/contact",
        meta: { title: "联系我们", parent: "" }
      },
      // 英文
      {
        path: "EN/home",
        component: ENHome,
        name: "EN/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "EN/aboutUs/:type",
        component: ENAboutUs,
        name: "EN/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "EN/product/:type",
        component: ENProduct,
        name: "EN/product",
        meta: { title: "产品", parent: "" }
      },
      {
        path: "EN/qa",
        component: ENQa,
        name: "EN/qa",
        meta: { title: "Q&A", parent: "" }
      },
      {
        path: "EN/contact",
        component: ENContact,
        name: "EN/contact",
        meta: { title: "联系我们", parent: "" }
      },
      // 泰语
      {
        path: "MY/home",
        component: MYHome,
        name: "MY/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "MY/aboutUs/:type",
        component: MYAboutUs,
        name: "MY/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "MY/product/:type",
        component: MYProduct,
        name: "MY/product",
        meta: { title: "产品", parent: "" }
      },
      {
        path: "MY/qa",
        component: MYQa,
        name: "MY/qa",
        meta: { title: "Q&A", parent: "" }
      },
      {
        path: "MY/contact",
        component: MYContact,
        name: "MY/contact",
        meta: { title: "联系我们", parent: "" }
      },
    ]
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "cur"
});

export default router;
