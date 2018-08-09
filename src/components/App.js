import React, {Component} from 'react';
// const App = props => <div>Our main component</div>
// class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const test = "HELOO THIS IS COPY";
//         return (
//            <div >
//                Hello This is me, Hi {test}
//             </div>
//         )
//     }
// }

const App = props => {
    const test = "HELOO THIS IS COPY from shortcut";
    return (
        <div >
            Hello This is me, Hi {test}
         </div>
     )
}

export default App;