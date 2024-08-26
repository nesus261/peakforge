import React from 'react'
import NavBar from './NavBar'

const About = () => {
  return (
    <>
        <NavBar active="about"></NavBar>
        <div className="container-about-1 text-1 d-flex justify-content-center align-items-center">
            <div className="container-fluid mt-3 mb-3">
                <h1 className="text-5 text-center">O nas</h1>
                <h5 className="mx-auto max-w-1 center-or-not mt-4"><b>PeakForge</b> to grupa młodych, ambitnych ludzi, którzy z pasją podchodzą do każdego projektu. Naszą misją jest dostarczanie innowacyjnych i efektywnych rozwiązań, które wspierają rozwój naszych klientów. Stale poszerzamy naszą wiedzę i umiejętności, aby oferować usługi na najwyższym poziomie.</h5>
                <div className="img-4 mx-auto mt-5">
                    <div className="img-4-color">
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About