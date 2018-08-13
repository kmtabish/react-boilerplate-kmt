import React, {Component} from 'react'
import { connect } from 'react-redux'
import {testAction, testAction2} from './action'

class MainScreen extends Component {
    constructor(props){
        super(props);
     }
    componentWillMount() {
        this.props.dispatch(testAction())
        this.props.dispatch(testAction2())
        
    }
    render() {
        return (<div>Screen [Route Main]</div>)
    }
}

const mapStateToProps = (state) => {
    return {
     buttonText: state.text
    }
}

const App = connect(
    mapStateToProps
)(MainScreen)

export default App