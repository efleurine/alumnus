import React from 'react';

class Info extends React.Component {
  render(){
    return (
      <div className="row school-info">
        <div className="school-info-container tc">
          <div className="school-info-name ">Presbyterale de Fleurenceau</div>
          <div className="school-info-location ">
            <div>Atibonit - Senmak</div>
          </div>
          <div className="school-info-promo H3 ">7 Pwomosyon | 365 élèv</div>
          <div className="P-1em">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor i
          ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur. Excepteur s int occaecat cupidatat non proident, s unt in culpa qui officia deserunt
           mollit anim id est laborum.</div>
        </div>
        <div className="school-info-footer"></div>
        <style jsx>{`
          .school-info {
            height: auto;
            background-color: #fff;
            margin-top: 5%;
            margin-left: 2%;
            margin-right: 2%;
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
          }
          .school-info-location {
            font-size: 1.75em;
            color: #29B765;
            font-weight: bold;
          }
          .school-info-promo {
            font-size: 1.5em;
          }
          .school-info-footer {
            height: 15px;
            background-color: #29B765;
          }
        `}</style>
      </div>
    )
  }
}

export default Info;
