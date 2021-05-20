import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Guide from "../pages/Guide";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact key="homepage" path="/">
          <Redirect to="/guide" />
        </Route>
        <Route exact key="homepage" path="/guide" component={Guide} />
      </Switch>
    </BrowserRouter>
  );
}
