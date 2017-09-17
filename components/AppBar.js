import React from 'react';

const AppBar = () => (
  <header className="root">
    <div className="row wrapper">
      <a className="brand">Alumnus</a>
    </div>
    <style jsx>{`
      .root {
        height: 72px;
        background-color: #fff;
      }

      .wrapper {
        justify-content : center;
        align-items: center;
        height: 100%;
      }

      .brand {
        display: block;
        text-decoration: none;
        color: #247ba0;
        font-size: 36px;
        font-weight: bold;
        margin: auto;
      }
    `}</style>
  </header>
);


export default AppBar;
