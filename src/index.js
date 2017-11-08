import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Boards from './Boards';
import BoardDetails from './BoardDetails';
import { Provider } from 'redux-zero/react';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


const Index = () => (
    <Provider store={store}>
       <HashRouter>
          <Switch>
             <Route exact path="/" component={SignIn} />
             <Route  exact path = "/signup" component={SignUp}/>
             <Route  exact path = "/boards" component={Boards}/>
             <Route  exact path = "/boarddetails" component={BoardDetails}/>
          </Switch>
       </HashRouter>
    </Provider>
 );
 
 ReactDOM.render(<Index />, document.getElementById('root'));
 registerServiceWorker();