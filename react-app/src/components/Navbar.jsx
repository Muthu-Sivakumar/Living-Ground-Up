import './css/Navbar.css'

function Navbar(){
  return(
    <>
      <div className="navbar">
				<span className="child l">
					<a href="/index.html"> About This Site </a>
				</span>
				<span className="child m">
					<a href="/__website/peace-of-mind/peace-of-mind.html">
						Living with Piece of Mind
					</a>
				</span>
				<span className="child r">
					<a href="/__website/genuine-joy/genuine-joy.html">
						Living with Genuine Joy
					</a>
				</span>
			</div>
    </>
  )
}

export default Navbar