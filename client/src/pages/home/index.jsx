import ResponsiveAppBar from "../../components/Navbar";
import StandardImageList from "./img";
import LogIn from "./login";

const Home = () => {
    return(<>
    <ResponsiveAppBar></ResponsiveAppBar>
    <h1>Home Page</h1>
    <StandardImageList></StandardImageList>
    <div>כאן יהיה מידע על האתר</div>
    <LogIn></LogIn>
    </>)
}
export default Home;