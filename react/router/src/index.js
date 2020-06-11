import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router ,Route} from "react-router-dom"

import A from "./pages/a"
import B from "./pages/b"
import Table from "./pages/table"
import print from "./pages/print"


ReactDOM.render(
  <Router>
    <Route path="/a" component={A}></Route>
    <Route path="/b" component={B}></Route>
    <Route path="/table" component={Table}></Route>
    <Route path="/print" component={print}></Route>
  </Router>,
  document.getElementById('root')
);

