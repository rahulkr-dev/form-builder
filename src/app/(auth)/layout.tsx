import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">{children}</main>
  )
}

export default Layout