import { connect } from 'react-redux'
import React, {Component} from 'react'
import TheComponent from '../../components/App';
import {Basic} from '../../constants/action';
import {textChange} from './action'


class Home extends Component {
    
    constructor(props,context){
        super(props,context);
     
        this.someFunc = ()=>{
          //here function code
        };
     }
    componentWillMount() {
        // this.props.onCreate();
        console.log("OOOOOOOOOOOOOO", this.props)
	}
    
    callFunction = () =>{
        this.props.dispatch(textChange())
    }

    render() {
    return (<div>Hello Wrapper<TheComponent label={this.props.buttonText} onClick={() => this.callFunction()}/></div>)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const App = connect(
    mapStateToProps
)(Home)
export default App;