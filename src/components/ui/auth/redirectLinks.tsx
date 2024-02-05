import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface RediectLinkProps{
    redirectHref:string,
    text:string
}
const RedirectLinks = ({redirectHref,text}:RediectLinkProps) => {
  return (
    <Button variant={"link"} asChild className='' >
        <Link className='font-normal text-thin text-xs text-blue-700' href={redirectHref}>
            {text}
        </Link>
    </Button>
  )
}

export default RedirectLinks