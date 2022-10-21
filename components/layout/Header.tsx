import { useRouter } from 'next/router'

function Header() {
    return <div   className="layout-header ">
            
            <ul className='nav nav-pills'>
                <li className='nav-item'><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                <li className='nav-item'><a className="nav-link"  href="#" >About</a></li>
                <li className='nav-item'><a className="nav-link" href="#">Services</a></li>
                <li className='nav-item'><a className="nav-link" href="#">Contacts</a></li>
            </ul>
            

            <div className="container-buttons">

                <button className="btn btn-light" >Sign In</button>
                <button className="btn btn-light" >Sign Up</button>

            </div>
            

         

    </div>
}

export default Header