import React, { useEffect, useRef } from 'react'

export default function FileInput({
  name,
  className,
  required,
  isFocused,
  handleChange,
}) {
  const fileInput = useRef()

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
        onChange={(e) => handleChange(e)}
      />
      <div
        className={`w-24 h-24 bg-red-700 text-slate-900 font-medium ${className}`}
        onClick={() => fileInput.current.click()}
      >
        Click Me
      </div>
    </div>
  )
}
