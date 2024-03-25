import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className="contact">
                <div className="contact-info">
                    <div className="first-info">
                        <img src="C:\Users\Sahil Arneja\Downloads\sneaker_Stroll_new-removebg-preview.png" alt="" />

                        <p>4150, Sector-23A ,Near the Northcap University<br />Gurugram, Haryana 122017</p>
                        <p>01601348732</p>
                        <p>Sneakerstroll@gmail.com</p>

                        <div className="social-icon">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-youtube'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>

                    <div className="second-info">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>About page</p>
                        <p>Size Guide</p>
                        <p>Shopping & Resturns</p>
                        <p>Privacy</p>
                    </div>

                    <div className="third-info">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Affiliate</p>
                        <p>Login</p>
                    </div>

                    <div className="five">
                        <button type="submit" style={{ backgroundColor: 'black', color: 'white', fontSize: '20px', padding: '10px 20px' }}>Subscribe</button>
                    </div>
                </div>
            </section>

            <div className="end-text">
                <p>Copyright © @2022. All Rights Reserved.Designd By Sneakerstroll.</p>
            </div>
    </div>
  )
}

export default Footer
