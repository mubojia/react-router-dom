import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routerConfig from "../views/RouterUrl/RouterUrl";

const loadRouter = () => {
  const getEleRouter = (router) => {
    const { layout, sublayout } = router;
    const Layout = router.layout;
    const Sublayout = router.sublayout;
    const Component = router.component;

    if (layout && sublayout) {
      return (
        <Layout>
          <Sublayout>
            <Component />
          </Sublayout>
        </Layout>
      );
    } else if (layout && !sublayout) {
      return (
        <Layout>
          <Component />
        </Layout>
      );
    } else {
      return <Component />;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {routerConfig.map((router, index) => {
          const { path, exact } = router;
          return (
            <Route
              exact={exact}
              path={path}
              key={index}
              component={() => {
                return getEleRouter(router);
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};
export default loadRouter;
