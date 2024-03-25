"use client"
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'


const Foot = ({data}) => {

  return (
    <>
     <footer className="footer max-sm:pl[20%]">
        <div className="footer-bottom">
          <div className="container ml-28">

            <a href="#" className="logo">
              <p className="imglogo">{data.user.about.name.trim()[0]}</p>
            </a>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                  <Facebook />
                </a>
              </li>

              <li>
                <a href="#" className="social-link"><Instagram /></a>
              </li>

              <li>
                <a href="#" className="social-link"><Twitter /></a>
              </li>

            </ul>

            <p className="copyright">Made with love</p>

          </div>
        </div>

      </footer>


    </>
  )
}

export default Foot