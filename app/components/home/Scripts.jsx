import React from 'react'

const Scripts = () => {
  return (
    <div className="container-4 text-1">
        <h1 className="text-5 text-center">Skrypty na zlecenie</h1>
        <h5 className="mx-auto max-w-1 center-or-not mt-4">Potrzebujesz skryptów, które zautomatyzują Twoje procesy biznesowe? Tworzymy skrypty dostosowane do Twoich potrzeb, które zwiększą efektywność Twojej firmy.</h5>
        <div className="d-flex justify-content-center video-wrapper mt-5 mb-4">
            <video className="mov-1" autoPlay muted playsInline loop>
                <source src="mov1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default Scripts