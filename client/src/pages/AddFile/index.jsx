import ResponsiveAppBar from "../../components/Navbar";
import CustomSeparator from "../../components/bread";
import File from "./file";
import Actions from "./Buttons";
import UpLoud from "../../uplouding";

const AddFile = () => {
    return(<>
    <ResponsiveAppBar></ResponsiveAppBar>
    <h1>הוספת קובץ </h1>
    <CustomSeparator></CustomSeparator>
    {/* <File></File> */}
    <Actions></Actions>
    <UpLoud></UpLoud>
    </>)
}
export default AddFile;