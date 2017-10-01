import React from 'react';
import PropType from 'prop-types'

function SchoolInfo({ schoolName, schoolLocation, schoolSummary, schoolInfo }) {
  return (
    <div className="school-info helvetica">
      <div className="school-info-container tc">
        <div className="school-info-name ">{ schoolName }</div>
        <div className="school-info-location ">
          <div>{ schoolLocation }</div>
        </div>
        <div className="school-info-promo  ">{ schoolSummary }</div>
        <br />
        <div>{ schoolInfo }</div>
      </div>
      <div className="school-info-footer">&nbsp;</div>
      <style jsx>{`
        .school-info {
          height: auto;
          background-color: #fff;
          margin-top: 5%;
          margin-left: 2%;
          margin-right: 2%;
          margin-bottom: 2%;
          font-family: Helvetica;
        }
        .school-info-container {
          padding: 3%;
          border:  1px solid whitesmoke;
          box-shadow: 0px -3px 15px 0px #ccc;
          justify-content : center;
        }
        .school-info-name {
          font-size: 2em;
          color: #094E62;
          font-weight: bold;
          margin-bottom: 0.5%;
        }
        .school-info-location {
          font-size: 1.75em;
          color: #1BB89E;
          font-weight: bold;
          margin-bottom: .5%;
        }
        .school-info-promo {
          font-size: 1.5em;
        }
        .school-info-footer {
          height: 15px;
          background-color: #1BB89E
        }
        .school-info-year  {
          margin-top:2%;
          margin-bottom:2%;
        }
      `}</style>
    </div>
  )
}

SchoolInfo.propTypes = {
  schoolName: PropType.string.isRequired,
  schoolSummary: PropType.string.isRequired,
  schoolLocation: PropType.string.isRequired,
  schoolInfo: PropType.string.isRequired,
}

SchoolInfo.defaultProps = {
  schoolName: 'Presbyterale de Fleurenceau',
  schoolLocation: 'Atibonit - Senmak',
  schoolSummary: '7 Pwomosyon | 365 élèv',
  schoolInfo: 'Des mots sur l\'école',
}

export default SchoolInfo
