import Footer from "../components/Footer"
import Head from "next/head"

function about()  {

    return (
    <>
 
    <h1 className="content">About</h1>
    </>

    )

    
}

export default about

about.getLayout = function PageLayout(page: any) {
    return (
        <>
        {page}
        <Footer/>
        </>
    )
}

  