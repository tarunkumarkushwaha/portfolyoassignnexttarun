import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import footbg from '../assets/images/footer-bg.jpg'

const Foot = ({data}) => {

  return (
    <>
      <footer className="footer">
        <div className="footer-bottom">
          <div className="container">

            <a href="#" className="logo">
              <p className="imglogo">{data.user.about.name.trim()[0]}</p>
            </a>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a href="#" className="social-link"><InstagramIcon /></a>
              </li>

              <li>
                <a href="#" className="social-link"><XIcon /></a>
              </li>

            </ul>

            <p className="copyright">Made with love</p>

          </div>
        </div>

        <div className="footer-bg has-before">
          <img src={footbg} width="1920" height="1135" loading="lazy" alt="photography"
            className="img-cover" />
        </div>

      </footer>


    </>
  )
}

export default Foot