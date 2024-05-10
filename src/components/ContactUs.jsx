import React from 'react'


const ContactUs = () => {
  function submit(e){
    const  formEl = document.getElementById( "form" );
    e.preventDefault()
    // console.log('submited');
    const formData = new FormData(formEl)
    fetch("https://script.google.com/macros/s/AKfycbyiNV7aZIRdMHOHt6QmoGlUSfiNJz02GLBQT_yz0t-KUh_H7YAEWKQZoH8apmp_02oB/exec", {
      method: "POST",
      body:formData
    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
    }).catch((err) => console.log(err))
    handleSucssesSumition()
  }
  function  handleSucssesSumition () {
    alert("Message Sent Successfully")
    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
  }

  return (
    <div>
      

      {/* start contact form */}
      <div className="untree_co-section">
      <div className="container">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-8 col-lg-8 pb-4">


              <div className="row mb-5">
                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    </div> 
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>info@yourdomain.com</p>
                    </div> 
                  </div> 
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                    </div> 
                    <div className="service-contents">
                      <p>+1 294 3925 3939</p>
                  </div>   
                   </div> 
                </div>
              </div>

              <form id='form' onSubmit={(e) => submit(e) }>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="fname">First Name</label>
                      <input type="text" className="form-control" name='Fname' id="fname"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="lname">Last Name</label>
                      <input type="text" className="form-control" name='Lname' id="lname"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" for="phone">Phone Number</label>
                  <input type="number" className="form-control" name='Phone' id="phone"/>
                </div>

                <div className="form-group">
                  <label className="text-black" for="email">Email</label>
                  <input type="email" className="form-control" name='Email' id="email"/>
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" for="Message">Message</label>
                  <textarea name="Message" className="form-control" id="message" cols="30" rows="5"/>
                </div>

                <button style={{ backgroundColor: "#3b5d50", color:"white" }} type="submit" className="btn btn-primary-hover-outline">Send Message</button>
              </form>

            </div>

          </div>

        </div>

      </div>


    </div>
    {/* End contact from */}
    </div>
  )
}

export default ContactUs