
import {Card,CardContent,CardHeader,CardTitle,CardFooter} from "@/components/ui/card"

interface AuthWrapperProps {
    children:React.ReactNode,
    cardTitle:string,
    oAuthLogo?:boolean

}
export const AuthWrapper = ({children,cardTitle,oAuthLogo}:AuthWrapperProps) => {
  return (
    <Card className="w-[400px]">
        <CardHeader >
            <CardTitle className="w-full text-center text-3xl font-light">{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            
        </CardFooter>
    </Card>
  )
}
