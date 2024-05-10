import React from 'react'
import img_grid_1 from '../assets/images/img-grid-1.jpg'
import img_grid_2 from '../assets/images/img-grid-2.jpg'
import img_grid_3 from '../assets/images/img-grid-3.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      {/* start of we help section */}
      <div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src={img_grid_1} alt="Untree.co"/></div>
							<div className="grid grid-2"><img src={img_grid_2} alt="Untree.co"/></div>
							<div className="grid grid-3"><img src={img_grid_3} alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
						<p><Link to="/contactus" className="btn btn-primary">Contact Us</Link></p>
					</div>
				</div>
			</div>
		</div>
    {/* End of we help section */}
    </div>
  )
}

export default AboutUs