import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  NotFoundPage,
  Pro,
  From,
  Vote,
  Pone,
  End
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Pone}/>
    <Route path="pro/:id" component={Pro}/>
    <Route path="from/:id" component={From}/>
    <Route path="vote" component={Vote}/>
    <Route path="home" component={Home}/>
    <Route path="end" component={End}/>
    <Route path="*" component={NotFoundPage}/>
     
  </Route>
);