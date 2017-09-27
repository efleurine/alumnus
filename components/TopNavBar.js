import React from 'react'

class Nav extends React.Component {
  componentDidMount() {
    // initSideNav()
  }
  render() {
    return (
      <div>
        <p className="tc bg-white ma0 pa3 f1 helvetica shadow-3 custom-color">Alumnus</p>
        <style jsx>{`
          .custom-color {
            color: #094E62;
          }
        `}</style>
      </div>

    )
  }
}

export default Nav
