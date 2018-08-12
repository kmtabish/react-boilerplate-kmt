import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import Menu from './Menu';
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
    console.log("OOOOOOOOOOO", props)
    return (
        <div >
            Hello This is me, Hi {test}
            <RaisedButton label={props.label} onClick={props.onClick} />
            <Menu />

         </div>
     )
}

App.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

App.defaultProps = {
    label: 'defaultText',
    onClick: () => console.log('default click action')
 }
export default App;