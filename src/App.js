import './assets/css/App.css';
import React from 'react';
import Main from './components/main'

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
// function App() {
//   const title = "this is app"
//   const element = React.createElement(
//     'div',
//     { title, className: 'App', style: { color: 'red' } },
//     'outer div',
//     React.createElement(
//       'h2',
//       null,
//       'I am h2'
//     )
//   )
//   return element;
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>hello world 1</h1>
//       </div>
//     );
//   }
// }

export default App;
