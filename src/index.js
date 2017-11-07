import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Boards from './Boards';
import { Provider } from 'redux-zero/react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <Provider store={store}>
       <HashRouter>
          <Switch>
             <Route path="/" component={SignIn} />
             <Route  exact path = "/signUp" component={SignUp}/>
             <Route  exact path = "/boards" component={Boards}/>
          </Switch>
       </HashRouter>
    </Provider>
 );
 
 ReactDOM.render(<Index />, document.getElementById('root'));
 registerServiceWorker();