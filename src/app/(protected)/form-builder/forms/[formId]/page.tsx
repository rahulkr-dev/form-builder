
interface IPageProps {
    params:{
        formId:string
    }
}
export default function Page({params:{formId}}: IPageProps) {
    console.log(formId,"path Id")
  return (
    <div>
      <h1>Page</h1>
      <p>Find me in ./web/src/pages/Page/Page.tsx</p>
    </div>
  )
}