// import React from "react";
// import ReactDOM from 'react-dom'

// class App extends React.Component{
//   render() {
//     return (
//       <div>234</div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// hot reload
// if (module.hot) { 
//   module.hot.accept('./print.js', function () {
//     console.log( _.join(['index', 'module', 'loaded!'], ' '))
//     printMe();
//   })
// }

// dynamic imports

function getComponent () {
  // /* webpackChunkName: 'lodash'*/ 我们的bundle会被命名为 lodash.bundle.js 而不是 [id].bundle.js
  // 打包后，变为vendors~lodash.bundle.js
  return import(/* webpackChunkName: 'lodash'*/ 'lodash').then(({_default: _}) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'an error occured')
}
getComponent().then((component) => {
  document.body.appendChild(component)
}).catch((err) => {
  
});