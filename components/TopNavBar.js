import React from 'react'

class Nav extends React.Component {
  componentDidMount() {
    // initSideNav()
  }
  render() {
    return (
      <div>
        <p className="tc bg-white ma0 pa3 f1 head-text">Alumnus</p>
        <style jsx>{`
              .head-text{
                color: #094E62;
                font-family: Helvetica;
                -webkit-box-shadow: 0px 6px 5px 0px #ccc;
                -moz-box-shadow:    0px 6px 5px 0px #ccc;
                box-shadow:         0px 6px 5px 0px #ccc;
              }
              `}
        </style>
      </div>

    )
  }
}

export default Nav
