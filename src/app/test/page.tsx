
import { createUser } from '@/lib/actions/user-action'
import { cn } from '@/lib/utils'
import React from 'react'

const TextPage = () => {

    // const createUserWithData = createUser.bind(null,{
    //     clerkId: "123",
    //     email: "rkrahul8181@gmail.com",
    //     username: "rahul",
    //     firstName: "rahul",
    //     lastName: "kumar",
    //     photo: "https://www.google.com"
    // });
    const colors = ["primary","secondary","destructive","muted","accent","popover","card"]

  return (
    <div className='bg-green-100'>
        {/* <form action={createUserWithData}>
            <button className='bg-green-500 px-4 py-2' type="submit">Add User</button>
        </form> */}

        <div>
          <div className="bg-background h-20 w-20 text-foreground " >
              Background
              foreground
          </div>
        </div>
        <div className="flex gap-4 ">
          {
            colors.map((colName=>(
              <div key={colName} className={`bg-${colName} text-${colName}-foreground h-24 w-24`}>
                  {colName}
                </div>
            )))
          }
        </div>

    </div>
  )
}

export default TextPage