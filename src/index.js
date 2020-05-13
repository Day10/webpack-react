import React from "react";
import ReactDOM from 'react-dom'
import printMe from './print.js';

class App extends React.Component{
  render() {
    return (
      <div>234</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if (module.hot) { 
  module.hot.accept('./print.js', function () {
    console.log('accepting the updated printMe module')
    printMe();
  })
}