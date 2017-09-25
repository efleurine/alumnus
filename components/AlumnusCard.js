import React from 'react';

class AlumnusCard extends React.Component {
  render(){
    return (
      <div>
        <div className="card">
           <div className="card-image">
             <img src="/static/john-doe.png" />
             <div className="card-content tc">
              <span className="card-title ">Peterson JEAN</span>
                <p>Travaille comme blabla, a etudie les sciences informatiques blablbalbala...
                 </p>
             </div>
           </div>
         </div>
        <style jsx>{`
          .card {
             box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
             transition: 0.4s;
          }
          .card-image {
          }
          .card:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          .card-content {
            padding: auto;
            padding-bottom: 5px;
            opacity: 0.5;
          }
          .card-title {
            font-size: 2em;
            font-weight: bold;
            color: #094E62;
          }
        `}</style>
      </div>
    )
  }
}

export default AlumnusCard;
