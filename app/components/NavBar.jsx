import React from 'react'

function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-1" href="/">
            <img className="logo" src="logo3.png" alt="" width="40" height="40" />
            PeakForge
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={"nav-link " + (props.active === 'home' ? 'active' : '')} aria-current="page" href="/">Strona główna</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (props.active === 'about' ? 'active' : '')} href="/about">O nas</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (props.active === 'contact' ? 'active' : '')} href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='nav-top-space'></div>
    </>
  )
}

export default NavBar