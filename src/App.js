import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RunPokeball from "./pages/RunPokeball";
import RunUseSpring from "./pages/RunUseSpring";
import RunUseSprings from "./pages/RunUseSprings";
import RunUseTrail from "./pages/RunUseTrail";
import RunUseTransition from "./pages/RunUseTransition";
import { ToastProvider } from "./hooks/toast";
import RunTransitionToaster from "./pages/RunTransitionToaster";
import RunAnimations from "./pages/RunAnimations";
import RunScroll from "./pages/RunScroll";

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="container-links">
          <Link to="/animations">Animations</Link>
          <Link to="/scroll">Scroll</Link>
          <Link to="/pokeball">pokeball</Link>
          <Link to="/use-spring">use-spring</Link>
          <Link to="/use-springs">use-springs</Link>
          <Link to="/use-trail">use-trail</Link>
          <Link to="/use-transition">use-transition</Link>
          <Link to="/use-transition-toaster">use-transition-toaster</Link>
        </div>
        <Switch>
          <Route exact path="/animations">
            <RunAnimations />
          </Route>
          <Route exact path="/scroll">
            <RunScroll />
          </Route>
          <Route exact path="/pokeball">
            <RunPokeball />
          </Route>
          <Route exact path="/use-spring">
            <RunUseSpring />
          </Route>
          <Route exact path="/use-springs">
            <RunUseSprings />
          </Route>
          <Route exact path="/use-trail">
            <RunUseTrail />
          </Route>
          <Route exact path="/use-transition">
            <RunUseTransition />
          </Route>
          <Route exact path="/use-transition-toaster">
            <RunTransitionToaster />
          </Route>
          <Route exact path="/">
            <RunPokeball />
          </Route>
        </Switch>
      </ToastProvider>
    </Router>
  );
}

export default App;
