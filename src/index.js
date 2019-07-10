import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const style = {
//   color: 'red'
// };
const Index = () => {
  return <div className='index'>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById('app'));
