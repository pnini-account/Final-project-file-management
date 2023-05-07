import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Uploader from "./Uploader";
import ShowArticle from './showArticle';
// import File from "../pages/AddFile/file";
const Up = () => {
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    return (
        <>
            <div className="new-book">
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={(e) => { setName(e.target.value); }}
                    />
                    {file}
                    <Uploader file={file} name={name} setFile={setFile} setName={setName} label="Add File" setShow={setShow} />
                    {show && <ShowArticle name={name}></ShowArticle>}
                    {err && err}
                </form>
            </div>


        </>
    )
}

export default Up;