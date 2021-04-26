import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routerConfig from "./views/RouterUrl/RouterUrl";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routerConfig.map((router, index) => {
            const { layout, sublayout, component, path, exact } = router;
            const Layout = router.layout;
            const Sublayout = router.sublayout;
            const Component = router.component;
            return layout ? (
              sublayout ? (
                <Route
                  exact={exact}
                  path={path}
                  key={index}
                  component={() => {
                    return (
                      <Layout>
                        <Sublayout>
                          <Component />
                        </Sublayout>
                      </Layout>
                    );
                  }}
                />
              ) : (
                <Route
                  exact={exact}
                  path={path}
                  key={index}
                  component={() => {
                    return (
                      <Layout>
                        <Component />
                      </Layout>
                    );
                  }}
                />
              )
            ) : (
              <Route
                exact={exact}
                path={path}
                component={component}
                key={index}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
