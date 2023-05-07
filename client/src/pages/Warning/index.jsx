import Breadcrumb from "../../components/bread";
import ResponsiveAppBar from "../../components/Navbar";
import WarningsList from "./war";
import Warning from "./list";
const Warnings = () => {
    return(<>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Breadcrumb></Breadcrumb>
    <h1>דף אזהרות מלאות</h1>
    <Warning></Warning>
    <WarningsList></WarningsList>
    </>)
}
export default Warnings;