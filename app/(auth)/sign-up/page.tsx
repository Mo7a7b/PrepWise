import AuthForm from '@/components/AuthForm'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <AuthForm type="sign-up" />
    </div>
  )
}

export default page