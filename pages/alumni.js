import React from 'react';
import BaseLayout from '../containers/BaseLayout';
import Info from '../components/SchoolInfo';
import AlumnusCard from '../components/AlumnusCard';

export default () => (
  <BaseLayout>
    <Info/>
    <div className="school-info-year tc " style={{margin: '2%', 'font-weight': 'bold','font-family': 'Helvetica', 'font-size': '1.5em'}}>2017</div>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-25-ns pa2">
          <AlumnusCard />
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <AlumnusCard />
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <AlumnusCard />
        </div>
        <div className="fl w-100 w-25-ns pa2">
          <AlumnusCard />
        </div>
      </div>
    </div>
  </BaseLayout>
);
