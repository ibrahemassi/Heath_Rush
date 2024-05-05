import React from 'react'
import { Link } from 'react-router-dom'
import truck from '../assets/images/truck.svg'
import bag from '../assets/images/bag.svg'
import support from '../assets/images/support.svg'
import returnn from '../assets/images/return.svg'
import why_choose_us_img from "../assets/images/why-choose-us-img.jpg"

const Home = () => {
  return (
    <div>
      {/* start hero section  */}
      {/* <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>More healthy choices </h1>
              <p className="mb-4" style={{ color: '#152f1d' }}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" style={{ borderColor: '#152f1d' }} className="btn btn-white-outline">Explore</a></p>
            </div>
          </div>

          </div>
        </div>
      </div> */}
      <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis" style={{marginBottom:"50px"}}>Health Rush</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" style={{marginTop:"50px"}}>
        <Link to="/shop">
          <button type="button" className="btn btn-secondary btn-lg px-4 gap-3" fdprocessedid="iuhxm" to="/shop">Shop Now</button>
        </Link>
        <Link to="/aboutus">
          <button type="button" className="btn btn-white-outline btn-lg px-4" fdprocessedid="1yak16" style={{ borderColor: '#152f1d' }} >About Us</button>
        </Link>
      </div>
    </div>
  </div>
      {/* End hero section  */}

      {/*start why choss us */}
      <div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">

        <div className="col-lg-5" style={{marginBottom:"70px"}}>
						<div className="img-wrap">
							<img src={why_choose_us_img} alt="Image" className="img-fluid"/>
						</div>
					</div>

					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={truck} alt="Image" className="imf-fluid"/>
									</div>
									<h3 >Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={bag} alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={support} alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={returnn} alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
      {/* end why choss us */}
    </div>
  )
}

export default Home