import path from "path";
import Image from "next/image"; 
import img from '../public/1.jpg'

function PetsPages() {
    return(
        <>
            {
                ['1','2','3'].map(path => {
                    return(
                        <div key={path}>
                            <Image src={img} placeholder='blur' alt='pet' width='280' height='390' />

                        </div>
                    )
                })
                
            }
        </>
    )
}

export default PetsPages