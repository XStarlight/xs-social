import React from "react";
import Tests from "./Tests";
import {connect} from "react-redux";
import {sendText, updateText} from "../../redux/tests-reducer";

let mapStateToProps = (state) => {
    return {
        testsPage: state.testsPage
    }
};

const TestsContainer = connect(mapStateToProps, {
    updateText,
    sendText
})(Tests);

export default TestsContainer;