import { useEffect, useState } from 'react'
import FileInput from './FileInput'

export default function ExtraFileInput({ number = 2 }) {
  const validNumber = number >= 2 ? number : 2
  const [disable, setDisable] = useState(true)
  const [fileInputList, setFileInputList] = useState(
    Array.from(Array(validNumber).keys())
  )
  const [fileInputData, setFileInputData] = useState({})

  const onHandleChange = (e) => {
    setFileInputData({ ...fileInputData, [e.target.name]: 'filled' })
  }

  const onHandleClick = () => {
    setFileInputList((prev) => [...prev, prev.length])
    // Don't permit creation of new boxes, if one is empty.
    setDisable(true)
  }

  useEffect(() => {
    // Permit creation of boxes, if all available boxes are filled.
    if (Object.keys(fileInputData).length === fileInputList.length - 1)
      setDisable(false)
  }, [Object.keys(fileInputData).length])

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
