import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authors from "./Authors";
import PostsDetails from "./PostsDetails";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/posts/:postId" component={PostsDetails} />
        <Route path="/authors/:authorId" component={Authors} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
