"use client"

import { createUser } from '@/lib/actions/user-action'
import React from 'react'

const TextPage = () => {

    const createUserWithData = createUser.bind(null,{
        clerkId: "123",
        email: "rkrahul8181@gmail.com",
        username: "rahul",
        firstName: "rahul",
        lastName: "kumar",
        photo: "https://www.google.com"
    });

  return (
    <div>
        <form action={createUserWithData}>
            <button className='bg-green-500 px-4 py-2' type="submit">Add User</button>
        </form>
    </div>
  )
}

export default TextPage