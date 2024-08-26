import React from 'react'
import { useTranslation } from 'react-i18next'

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="container-1">
        <div className="full-size-opacity container-fluid full-height d-flex align-items-center justify-content-center">
            <div className="container-fluid mt-3 mb-3">
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-lg-4 align-items-end justify-content-end text-center">
                        <img className="logo2" src="logo2.png" />
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="text-center text-2 mt-4">
                            <h1 className="text-6">{t('welcome_peakforge')}</h1>
                            <p className="text-7 max-w-2">Miejscu, gdzie powstaną nowoczesne rozwiązania dla twojego biznesu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome