import { connect } from 'react-redux'
import React, {Component} from 'react'
import TestComponent from '../../components/MenuComponent';
import {Basic} from '../../constants/action';
import {textChange} from './action'


class Home extends Component {    
    constructor(props,context){
        super(props,context);
    }
    componentWillMount() {
        //Initial call will go here
    }
    
    onButtonClick = () =>{
        this.props.dispatch(textChange())
    }

    render() {
        return (
            <div>
                <TestComponent label={this.props.buttonText} onClick={() => this.onButtonClick()}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

}

const mapStateToProps = (state, ownProps) => {
    return {
        buttonText: state.text
    }
}
const App = connect(mapStateToProps)(Home)
export default App;