
const Uploader = ({onChoose}) => {

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