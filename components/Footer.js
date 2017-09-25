import React from 'react'

function Footer() {
  return (
    <div className="fix-bottom">
      <p className="tc">All rigths reserved</p>
      <style jsx>{`
        .fix-bottom {
          position: relative;
          bottom: 0;
          width: 100%;
          height: auto;
          color: #094E62;
        }
      `}</style>
    </div>
  )
}

export default Footer
