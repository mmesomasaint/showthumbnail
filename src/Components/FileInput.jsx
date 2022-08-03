import React, { useState, useEffect, useRef } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FileInput({
  name,
  className,
  img,
  required,
  isFocused,
  handleChange,
}) {
  const fileInput = useRef()
  const [bckImg, setBckImg] = useState('')

  const handleInternalChange = (e) => {
    setBckImg(URL.createObjectURL(e.target.files[0]))
    return handleChange(e)
  }

  useEffect(() => {
    if (isFocused) {
      fileInput.current.focus()
    }
  }, [isFocused])

  return (
    <div className='flex flex-col items-start'>
      <input
        type='file'
        name={name}
        className={
          `hidden`
        }
        ref={fileInput}
        required={required}
        onChange={handleInternalChange}
      />
      <div
        className={`w-24 h-24 text-slate-50 text-5xl font-medium ${className} flex justify-center items-center mx-2 my-1`}
        style={{'background': `center / cover no-repeat #777 url(${bckImg})`}}
        onClick={() => fileInput.current.click()}
      >
        {!bckImg && <FontAwesomeIcon icon={faPlus} />}
      </div>
    </div>
  )
}
