import AuthLeftSection from '@/components/AuthLeftSection/AuthLeftSection'
import SignupRightSection from '@/components/SignupRightSection/SignupRightSection'
import React from 'react'

const Page = () => {
  return (
  <div className="flex md:flex-row flex-col">
        <AuthLeftSection />
        <SignupRightSection />
      </div>

  )
}

export default Page