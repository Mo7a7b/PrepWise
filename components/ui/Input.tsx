import React from 'react'

export const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input {...props} className={`bg-[#27282F] text-white py-2 px-4 border-none outline-none rounded-full text-sm ${className}`} type={type} />
  )
}