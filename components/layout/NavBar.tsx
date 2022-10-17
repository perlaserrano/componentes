import { useState } from "react";


function NavBar() {
    
    const initialValue ={
        comment:undefined
    }
   

    const [comments, setComments] = useState(initialValue)
        
    const handlerChange = (e:any) =>{
        setComments({
            ...comments,
            [e.target.name]:e.target.value
        })
      
    }
    const handlerSubmit = (e:any) =>{
        
        e.preventDefault();
        
        console.log("funciona");

    }


        
    


    return <div >
        <section>
            <div className="card" style={{ width: "18rem",backgroundColor:"#c3b4b438"  }}>
                <div className="card-header">
                    Sections News
                </div>
                <form onSubmit={handlerSubmit}  style={{marginLeft:"25px"}} action="text">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">International</li>
                    <li className="list-group-item">Society</li>
                    <li className="list-group-item">Sport</li>
                <input onChange={handlerChange}  name="comment" value={comments.comment} placeholder="comment" type="text" />
                </ul>
             <button className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className="new-news">

                <p>New News </p>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque inventore est asperiores similique odio ab repudiandae voluptatem quibusdam animi voluptatibus, esse, repellat, tenetur iusto sequi officiis! Quod, quasi fuga.</span>

            </div>


            <div className="seccion-clima">
                <p style={{ fontSize: "30px", }}>Climate</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt fugit minima impedit, saepe dolorem voluptas dolore ipsam repudiandae tempore ducimus magnam aperiam eveniet non quisquam vero aliquam itaque! Excepturi!</span>
            </div>

            {/* <div style={{width:"49%"}} className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
</div> */}
            
          
        </section>


    </div>


}

export default NavBar;