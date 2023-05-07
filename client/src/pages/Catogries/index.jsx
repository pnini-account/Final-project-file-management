import ResponsiveAppBar from "../../components/Navbar";
import Actions from "./Buttons";
import WarningsDetails from "./bell";
import Categories from "./List";
import Search from "./Search";
import FoldersFiles from "./foldersFiles";

const Category = () => {
    return (<>
        <ResponsiveAppBar></ResponsiveAppBar>
        <h1>דף ראשי</h1>
        <WarningsDetails></WarningsDetails>
        <Search></Search>
        <Actions></Actions>
        <Categories></Categories>
        <FoldersFiles></FoldersFiles>
        {/* <Categories></Categories> */}
    </>)
}
export default Category;