import Navbar from "./Navbar";
import PostList from "./PostList";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <nav><PostList /></nav>
    </div>
  )
}
 
export default Homepage;