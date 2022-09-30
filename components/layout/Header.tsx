function Header() {
    return <div   className="layout-header">
            <p style={{color:"white", fontSize:"55px", paddingRight:"200px"}}>international News</p>
            
            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            

            <div className="container-buttons">
                <button className="btn btn-warning" >Sign In</button>
                <button className="btn btn-warning" >Sign Up</button>

            </div>

         

    </div>
}

export default Header