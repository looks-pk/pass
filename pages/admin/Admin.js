import Link from 'next/link'
import React from 'react'
import Sidebar from './admincomponent/sidebar'

const Admin = () => {
  return (
    <>
  <style jsx global>{`
        footer {
          display: none;
         
        }
      `}</style>
    <Sidebar/>
    </>
  )
}

export default Admin

