import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import BoardPage from './pages/BoardPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={LandingPage}
        />
        <Route
          exact
          path='/signup'
          component={SignupPage}
        />
        <Route
          exact
          path='/board'
          component={BoardPage}
        />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
