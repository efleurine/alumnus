import React from 'react'

function Footer() {
  return (
    <div className="fix-bottom">
      <p className="tc">All rigth reserved</p>
      <style jsx>{`
        .fix-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
        }
      `}</style>
    </div>
  )
}

export default Footer
