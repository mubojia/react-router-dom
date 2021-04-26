import Login from "../LoginPage/index";
import HomePage from "../HomePage/HomePage";
import RouterPageOne from "../RouterPageOne/RouterPageOne";
import RouterPageTwo from "../RouterPageTwo/RouterPageTwo";
import RouterPageThree from "../RouterPageThree/RouterPageThree";
import RouterPageFour from "../RouterPageFour/RouterPageFour";
import PageA1 from "../Pages/PagesA1";
import PageA2 from "../Pages/PagesA2";
import PageA3 from "../Pages/PagesA3";
import PageA4 from "../Pages/PagesA4";
import PageB1 from "../Pages/PagesB1";
import PageB2 from "../Pages/PagesB2";
import PageB3 from "../Pages/PagesB3";
import PageB4 from "../Pages/PagesB4";
import PageC1 from "../Pages/PagesC1";
import PageC2 from "../Pages/PagesC2";
import PageC3 from "../Pages/PagesC3";
import PageC4 from "../Pages/PagesC4";
import PageD1 from "../Pages/PagesD1";
import PageD2 from "../Pages/PagesD2";
import PageD3 from "../Pages/PagesD3";
import PageD4 from "../Pages/PagesD4";

const routerConfig = [
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    component: RouterPageOne,
    path: "/subnav1",
    layout: HomePage,
    exact: true,
  },
  {
    component: PageA1,
    path: "/subnav1/content1",
    layout: HomePage,
    sublayout: RouterPageOne,
    exact: true,
  },
  {
    component: PageA2,
    path: "/subnav1/content2",
    layout: HomePage,
    sublayout: RouterPageOne,
    exact: true,
  },
  {
    component: PageA3,
    path: "/subnav1/content3",
    layout: HomePage,
    sublayout: RouterPageOne,
    exact: true,
  },
  {
    component: PageA4,
    path: "/subnav1/content4",
    layout: HomePage,
    sublayout: RouterPageOne,
    exact: true,
  },
  {
    component: RouterPageTwo,
    path: "/subnav2",
    layout: HomePage,
    exact: true,
  },
  {
    component: PageB1,
    path: "/subnav2/content1",
    layout: HomePage,
    sublayout: RouterPageTwo,
    exact: true,
  },
  {
    component: PageB2,
    path: "/subnav2/content2",
    layout: HomePage,
    sublayout: RouterPageTwo,
    exact: true,
  },
  {
    component: PageB3,
    path: "/subnav2/content3",
    layout: HomePage,
    sublayout: RouterPageTwo,
    exact: true,
  },
  {
    component: PageB4,
    path: "/subnav2/content4",
    layout: HomePage,
    sublayout: RouterPageTwo,
    exact: true,
  },
  {
    component: RouterPageThree,
    path: "/subnav3",
    layout: HomePage,
    exact: true,
  },
  {
    component: PageC1,
    path: "/subnav3/content1",
    layout: HomePage,
    sublayout: RouterPageThree,
    exact: true,
  },
  {
    component: PageC2,
    path: "/subnav3/content2",
    layout: HomePage,
    sublayout: RouterPageThree,
    exact: true,
  },
  {
    component: PageC3,
    path: "/subnav3/content3",
    layout: HomePage,
    sublayout: RouterPageThree,
    exact: true,
  },
  {
    component: PageC4,
    path: "/subnav3/content4",
    layout: HomePage,
    sublayout: RouterPageThree,
    exact: true,
  },
  {
    component: RouterPageFour,
    path: "/subnav4",
    layout: HomePage,
    exact: true,
  },
  {
    component: PageD1,
    path: "/subnav4/content1",
    layout: HomePage,
    sublayout: RouterPageFour,
    exact: true,
  },
  {
    component: PageD2,
    path: "/subnav4/content2",
    layout: HomePage,
    sublayout: RouterPageFour,
    exact: true,
  },
  {
    component: PageD3,
    path: "/subnav4/content3",
    layout: HomePage,
    sublayout: RouterPageFour,
    exact: true,
  },
  {
    component: PageD4,
    path: "/subnav4/content4",
    layout: HomePage,
    sublayout: RouterPageFour,
    exact: true,
  },
];
export default routerConfig;
