import React from 'react';
import ReactDOM from 'react-dom';

function Manage(props) {
    return (
        <p className="manage__context">
            <h3 className="manage__title">{props.title}</h3>
            <p className="manage__text">{props.children}</p>
        </p>
    );
}

function SuccessMessage(props) {
    return (
        <div className={'message message_success'}>
            <MessageContent title={props.title}>{props.children}</MessageContent>
        </div>
    );
}

function MessageContent(props) {
    return (
        <p className="message__content">
            <h3 className="message__title">{props.children}</h3>
        </p>
    );
}

function App() {
    return (
        <p>
            <SuccessMessage title="success">Successsssssssss</SuccessMessage>
        </p>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    )
}

function DialogSuccess(props) {
    return (
        <Dialog
            title="Hey m'boy"
            message="You are gonna be high"
        />
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }

    render() {
        return (
            <Dialog title="Программа исследования Марса"
                message="Как к вам обращаться?">
                <input value={this.state.login}
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Запишите меня!
          </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Добро пожаловать на борт, ${this.state.login}!`);
    }
}