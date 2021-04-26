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

const RouterUrl = [
  {
    component: Login,
    url: "/login",
  },
  {
    component: HomePage,
    url: "/",
    children: [
      {
        component: RouterPageOne,
        url: "/subnav1",
        children: [
          {
            component: PageA1,
            url: "/subnav1/content1",
          },
          {
            component: PageA2,
            url: "/subnav1/content2",
          },
          {
            component: PageA3,
            url: "/subnav1/content3",
          },
          {
            component: PageA4,
            url: "/subnav1/content4",
          },
        ],
      },
      {
        component: RouterPageTwo,
        url: "/subnav2",
        children: [
          {
            component: PageB1,
            url: "/subnav2/content1",
          },
          {
            component: PageB2,
            url: "/subnav2/content2",
          },
          {
            component: PageB3,
            url: "/subnav2/content3",
          },
          {
            component: PageB4,
            url: "/subnav2/content4",
          },
        ],
      },
      {
        component: RouterPageThree,
        url: "/subnav3",
        children: [
          {
            component: PageC1,
            url: "/subnav3/content1",
          },
          {
            component: PageC2,
            url: "/subnav3/content2",
          },
          {
            component: PageC3,
            url: "/subnav3/content3",
          },
          {
            component: PageC4,
            url: "/subnav3/content4",
          },
        ],
      },
      {
        component: RouterPageFour,
        url: "/subnav4",
        children: [
          {
            component: PageD1,
            url: "/subnav4/content1",
          },
          {
            component: PageD2,
            url: "/subnav4/content2",
          },
          {
            component: PageD3,
            url: "/subnav4/content3",
          },
          {
            component: PageD4,
            url: "/subnav4/content4",
          },
        ],
      },
    ],
  },
];
export default RouterUrl;
