import './css/Navbar.css'
import { Link } from 'react-router';

function Navbar(){
  return(
    <>

			<div className="navbar">

				<span className="child l">
					<Link to="/"> About This Site </Link>
				</span>
				<span className="child m">
					<Link to="Peace">Living with Piece of Mind</Link>
				</span>
				<span className="child r">
					<Link to="Joy">Living with Genuine Joy</Link>
				</span>
			
			</div>
    </>
  )
}

export default Navbar