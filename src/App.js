import { useState } from "react";
import FileInput from "./Components/FileInput";

export default function App() {
  const [fileInputList, setFileInputList] = useState([0, 1, 2, 3])

  const onHandleChange = (e) => {
    // Do something crazy...
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {fileInputList.map(fileKey => <FileInput key={fileKey} handleChange={onHandleChange} />)}
      <button type='button' className="inline" onClick={() => setFileInputList([...fileInputList, fileInputList.length])}>Add Image</button>
      </div>
    </div>
  )
}