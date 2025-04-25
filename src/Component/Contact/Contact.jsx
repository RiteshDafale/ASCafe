import React from 'react'
import '../Contact/Contact.css';

function Contact() {
    return (
        <div>
            <div className="container mt-5 bg-secondary text-white d-flex flex-column justify-content-center align-items-center blur-bg formLayout  ">
                <h5 className='m-3 '>Contact details</h5>
                <div className="form ">
                    <form className="row g-3  ">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center inputDiv">
                            {/* <label for="inputEmail4" className="form-label">FullName</label> */}
                            <input type="text" className="form-control  forminput  " id="inputEmail4" placeholder=' Fullname ...' />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            {/* <label for="inputAddress" className="form-label">Phone No</label> */}
                            <input type="text" className="form-control forminput" id="inputAddress" placeholder="Contact Number..." />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            {/* <label for="inputAddress" className="form-label">Phone No</label> */}
                            <input type="text" className="form-control forminput " id="inputAddress" placeholder="Email Address..." />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            <select className="form-select forminput" aria-label="Reason to Contact">
                                <option selected>Open this select menu</option>
                                <option value="1">Enquiry</option>
                                <option value="2">Buy the Francise</option>
                            </select>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            <textarea className="form-control forminput " placeholder="Leave a comment here" id="floatingTextarea2 h-200"></textarea>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center ">
                        <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
