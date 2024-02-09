import React from 'react'
import Link from 'next/link'

interface RediectLinkProps{
    redirectHref:string,
    text:string
}
const RedirectLinks = ({redirectHref,text}:RediectLinkProps) => {
  return (
    <p className="py-2 text-sm text-muted-foreground hover:underline">
    <Link
      href={redirectHref}
      className="hover:text-brand"
    >
      {text}
     
    </Link>
  </p>
  )
}

export default RedirectLinks