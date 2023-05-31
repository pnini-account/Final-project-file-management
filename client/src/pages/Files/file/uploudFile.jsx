// import { useEffect, useState } from "react"
// const token = sessionStorage.getItem("token");

// const Uploader = ({ label }) => {
//   const [selectFile, setSelectFile] = useState();
//   const [err, setErr] = useState();
//   const [unauthorized, setUnauthorized] = useState(false);
//   useEffect(() => {  
//     if (selectFile) {
//       const formData = new FormData()
//       formData.append("file", selectFile);         
//       async function fetchData() {
//         const a = await fetch(`http://localhost:3600/api/upload`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'authorization': `Bearer ${token}`

//           },
//           body: JSON.stringify({ formData })       

//         })  
//         console.log("@@@")
//         if (a.ok) {
//           console.log("a.ok")
//         }
//         else {
//           setUnauthorized(true);
//           const err = await a.json();
//           setErr(err.message);
//           console.log(err.message)
//         }
//       }
//       fetchData();
//     }
//   }, [selectFile]);

//   const onSelectFile = (e) => {
//     setSelectFile(e.target.files[0])
//   }
//   return (
//     <>
//       <label htmlFor="file"> {label ? label : "File"} </label>
//       <input type="file" onChange={onSelectFile} name="file" />
//     </>
//   )
// }

// export default Uploader


// const token = sessionStorage.getItem("token");
// var idFolder;
// const AddFile = async (idFolder)=>{
//   const { id } = useParams();
//   if (!idFolder) {
//     idFolder = id;
//   }
// }

//     if (responseOfFile.ok) {
//         if (responseOfFile.ok) {

//             setFile(await responseOfFile.json())
//         }
//         else {
//             setUnauthorized(true);
//             const err = await responseOfFile.json();
//             setErr(err.message);
//             console.log(err.message)
//         }
//     }
// }

const Uploader = ({onChoose}) => {
//   const [selectFile, setSelectFile] = useState();
//   const [selected, setSelected] = useState(false);
//   async function selectedFunc() {
//     if (selectFile) {
//       const formData = new FormData();
//       formData.append("file", selectFile);
//       formData.append("name", name);
//       console.log("useEffect");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };

//       axios.post("http://localhost:3600/api/upload", formData, config, idFolder).then(({ data }) => {
//         if (data?.name) {
//           console.log(data.name);
//           console.log(data.location);
//           setFile(data.location);
//           setName(data.name);

//         }
//       }).catch(err => {
//         console.log("error");
//       });
//     }
//     setShow(true);
//     setSelected(false);
//   }

  const onSelectFile = (e) => {
    onChoose(e.target.files[0])
  }

  return (
    <>
      <label > choose </label>
      <input type="file" onChange={onSelectFile} name="file" />
    </>
  )
}

export default Uploader;