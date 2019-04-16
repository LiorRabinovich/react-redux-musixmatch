import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModalAction } from '../actions/modalActions';

import Modal from '../components/Modal';

class ModalContainer extends Component {
    render() {
        return (
            <Modal
                isOpen={(Object.keys(this.props.modalActive).length > 0)}
                title={this.props.modalActive.title}
                body={this.props.modalActive.body}
                isButtonCloseEnable={this.props.modalActive.isButtonCloseEnable}
                buttons={this.props.modalActive.buttons}
                handlerCloseModal={this.props.handlerCloseModal}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalActive: state.modalReducer.modalActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlerCloseModal: (trackAdd, trackRemove) => {
            dispatch(closeModalAction());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
