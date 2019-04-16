import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const modalOpenClass = (this.props.isOpen ? 'modal-open' : '');
        const buttonsRender = this.getButtonsRender();
        const buttonHeaderCloseRender = this.getButtonHeaderCloseRender();
        const bodyRender = this.getBodyRender();

        return (
            <div className={`modal ${modalOpenClass}`}>
                <div className="modal-box">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        {buttonHeaderCloseRender}
                    </div>
                    {bodyRender}
                    {buttonsRender}
                </div>
            </div>
        );
    }
    handlerClickButton(action, isCloseAfterAction) {
        if (typeof action === 'function') {
            action();
        }
        this.props.handlerCloseModal();
    }
    getButtonsRender() {
        let buttonsRender = null;

        if (this.props.isButtonCloseEnable) {
            buttonsRender = <button type="button" className="button button-red" data-dismiss="modal">Close</button>;
        }

        if (this.props.buttons) {
            buttonsRender = this.props.buttons.map((button, buttonIndex) =>
                <button
                    key={buttonIndex}
                    type="button"
                    className="button"
                    onClick={(e) => this.handlerClickButton(button.action)}>
                    {button.label}
                </button>
            );
        }

        if (buttonsRender !== null) {
            return <div className="modal-buttons">
                {buttonsRender}
            </div>
        }

        return buttonsRender;
    }
    getButtonHeaderCloseRender() {
        if (this.props.isButtonHeaderCloseEnable) {
            return <button type="button" className="close"><span>&times;</span></button>
        }
        return null;
    }
    getBodyRender() {
        if (this.props.body) {
            return <div className="modal-body">{this.props.body}</div>
        }
        return null;
    }
}


export default Modal;
