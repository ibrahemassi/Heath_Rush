import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container relative">

      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Health Rust<span>.</span></a></div>
          <p className="mb-4 mx-100">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

          <ul className="list-unstyled custom-social">
            <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
            <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
            <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
          </ul>
        </div>

        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved.</p>
          </div>

        </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer