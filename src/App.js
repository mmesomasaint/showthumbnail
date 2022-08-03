import { useState } from "react";
import ExtraFileInput from "./Components/ExtraFileInput";
import FileInput from "./Components/FileInput";

export default function App({onHandleChange}) {
  const [fileInputList, setFileInputList] = useState([0, 1, 2, 3])

  return (
    <div>
      <div className="flex flex-wrap">
        <ExtraFileInput number={4} />
      </div>
    </div>
  )
}