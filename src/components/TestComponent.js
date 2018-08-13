import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import MenuComponent from './MenuComponent';

const App = props => {
    return (
        <div >
            Test Home Screen [/ route]
            <RaisedButton label={props.label} onClick={props.onClick} />
            <MenuComponent />
         </div>
     )
}

App.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

App.defaultProps = {
    label: 'defaultText',
    onClick: () => console.log('default click action')
 }
export default App;