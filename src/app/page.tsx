import { UserButton } from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div>
     <p >
      Home page
      </p>

      <UserButton afterSignOutUrl="/" />
    
    </div>
  )
}

export default HomePage