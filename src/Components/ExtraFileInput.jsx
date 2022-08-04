import { useState } from 'react'
import FileInput from './FileInput'

export default function ExtraFileInput({ number = 0 }) {
  const [disable, setDisable] = useState(true)
  const [fileInputList, setFileInputList] = useState(
    Array.from(Array(number).keys())
  )
  const [fileInputData, setFileInputData] = useState({})

  const onHandleChange = (e) => {
    setFileInputData({ ...fileInputData, [e.target.name]: e.target.files[0] })
    if (Object.keys(fileInputData).length === fileInputList.length - 2)
      setDisable(false)
  }

  const onHandleClick = () => {
    setFileInputList((prev) => [...prev, prev.length])
    setDisable(true)
  }

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {fileInputList.map((fileKey, index, list) => {
          const isLastInput = list.length - index === 1
          return (
            <FileInput
              name={`${fileKey}`}
              key={fileKey}
              handleClick={isLastInput && onHandleClick}
              handleChange={!isLastInput && onHandleChange}
              disabled={isLastInput && disable}
            />
          )
        })}
      </div>
    </div>
  )
}
