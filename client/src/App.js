import Login from "./pages/login/Login";
import Categories from "./pages/Categories"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import ReadFile from "./pages/Files";
import AddFile from "./pages/AddFile";
import Folder from "./pages/Folders";
import Warning from "./pages/Warning";
import Single from "./pages/Categories/Single";
import SingleFolder from "./pages/Folders/Single";
import DeleteFile from "./pages/Files/file/delete";
// import SingleCategory from "./pages/Catogries/Single"
// import NestedGrid from "./pages/Catogries/List/asd";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/אזור אישי" element={<Login />}></Route>
        <Route path="/AddFile" element={<AddFile />}></Route>
        <Route path="/ReadFile/:id" element={<ReadFile />}></Route>
        <Route path="/ReadFile/" element={<ReadFile />}></Route>
        <Route path="/Folder" element={<Folder />}></Route>
        <Route path="/Warning" element={<Warning />}></Route>
        {/* <Route path = "/bv" element={<NestedGrid/>}></Route> */}
        {/* <Route path = "/SingleCategory" element={<SingleCategory/>}></Route> */}
        <Route path="/SingleCategory/:id" element={<Single />}></Route>
        <Route path="/SingleFolder/:id" element={<SingleFolder />}></Route>
        <Route path = "/DeleteFile/:id" element={<DeleteFile/>}></Route>

        <Route path="/אזור אישי/folders/:folderId" element={<Login />}></Route>
      </Routes>
    </Router>


  );
}
export default App;
