import { connect } from 'react-redux'
import React, {Component} from 'react'
import TheComponent from '../components/App';
import {Basic} from '../constants/action';
import {textChange} from './action'
const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}

const Home = props => {
    
    const call = () =>{
        props.dispatch(textChange())
    }

    return (<div>Hello Wrapper<TheComponent label={props.buttonText} onClick={() => call()}/></div>)
}

const mapDispatchToProps = (dispatch, ownProps) => {

}
const App = connect(
    mapStateToProps
)(Home)
export default App;