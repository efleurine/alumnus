import React from 'react';


function AlumnusCard() {
  return (
    <div>
      <div className="card shadow-1">
        <div className="card-image">
          <img src="/static/john-doe.png" alt="Profile" />
          <div className="card-content tc pb2">
            <span className="card-title b f2 black">Peterson JEAN</span>
            <p>Travaille comme blabla, a etudie les sciences informatiques blablbalbala...</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AlumnusCard;
