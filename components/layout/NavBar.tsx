import { useState } from "react";


function NavBar() {

    const initialValue = {
        comment: undefined
    }


    const [comments, setComments] = useState(initialValue)

    const handlerChange = (e: any) => {
        setComments({
            ...comments,
            [e.target.name]: e.target.value
        })

    }
    const handlerSubmit = (e: any) => {

        e.preventDefault();

        console.log(e);

    }






    return <div >

        <section>
            <div className="card" style={{ width: "18rem", backgroundColor: "#c3b4b438" }}>
                <div className="card-header btn-close-white">
                    Sections News
                </div>
                <form onSubmit={handlerSubmit} style={{ marginLeft: "25px" }} action="text">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item btn-link international">International</li>
                        <li className="list-group-item btn-link">Society</li>
                        <li className="list-group-item btn-link">Sport</li>
                        <input onChange={handlerChange} name="comment" value={comments.comment} placeholder="Search" type="text" />
                    </ul>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className="col-md-8">
                <div style={{marginRight:"17%", width:"92%"}} className="container p-lg-0">
                    <div className="row">
                        <div>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="news.jpg" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="coronavirus.jpg" className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="redes.jpg" className="d-block w-100" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="form-check-reverse p-0" style={{ color: "#1416197d", fontSize: "55px", marginTop: "25%" }}>international News</p>

                        </div>

                    </div>

                </div>

            </div>






            {/* <div style={{width:"49%"}} className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
</div> */}

        </section>


    </div>


}

export default NavBar;