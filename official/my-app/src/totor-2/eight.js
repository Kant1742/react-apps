import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Conditioner extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: 0 };

        // Привязка необходима, чтобы сделать this доступным в коллбэке
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease() {
        this.setState(prevState => ({
            temperature: prevState.temperature + 1
        }))
    }

    onDecrease() {
        this.setState(prevState => ({
            temperature: prevState.temperature - 1
        }))
    }

    render() {
        return (
            <p>
                <h2>Current temperature: {this.state.temperature}</h2>
                <button onClick={this.onDecrease}>-</button>
                <button onClick={this.onIncrease}>+</button>
            </p>
        );
    }
}

// 
{/* <button onClick={(e) => this.deleteRow(id, e)}></button>
<button onClick={this.deleteRow.bind(this, id)}></button> */}

function ErrorMessage(props) {
    return <h3>There is an error</h3>;
}

function SuccessMessage(props) {
    return <h3>Everything is OK</h3>;
}

function Response(props) {
    const isSuccess = props.isSuccess;
    // if (isSuccess) {
    //     return <SuccessMessage/>
    // }
    // return <ErrorMessage/>

    // The same as above
    return isSuccess ? <SuccessMesssage /> : <ErrorMessage />
}


function SetFireButton(props) {
    return (<button className="orange" onClick={props.onClick}>Fire up</button>);
}

function SnuffOutButton(props) {
    return (<button className="blue" onClick={props.onClick}>Потушить</button>);
}

class FirePlace extends Component {
    constructor(props) {
        super(props);
        this.onSetFire = this.onSetFire.bind(this);
        this.onSnuffOutButton = this.onSnuffOutButton.bind(this);
        this.state = { isBurning: false };
    }

    onSetFire() {
        this.setState({ isBurning: true })
    }

    onSnuffOutButton() {
        this.setState({ isBurning: false })
    }

    render() {
        const isBurning = this.state.isBurning

        let button = null;
        if (isBurning) {
            button = <SnuffOutButton onClick={this.onSetFire} />
        } else {
            button = <SetFireButton onClick={this.onSnuffOutButton} />
        }

        return (
            <div>
                <Indicator isBurning={isBurning} />
                {button}
            </div>
        );
    }
}
ReactDOM.render(<Response isSuccess={true} />, document.getElementById('root'));

// Этот код работает, потому что в JavaScript true && выражение всегда
// возвращает выражение, а false && выражение всегда возвращает false.
function Console(props) {
    const errors = props.errors;
    return (
        <p>
            <h3>Attention!</h3>
            {errors.length > 0 &&
                <p>You have <b>{errors.length}</b> errors.</p>
            }
        </p>
    );
}

const errors = [
    'Failed to load resource: net::ERR_INSECURE_RESPONSE',
    'TypeError: e is undefined',
    'Uncaught ReferenceError: calculate is not defined'
];

ReactDOM.render(<Console errors={errors} />, document.getElementById('root'));


function test(props) {
    render() {
        const isNew = this.state.isNew;

        return (
            <div>
                {isNew ? (
                    <div>
                        <EditButton onClick={this.onEdit} />
                        <DeleteButton onClick={this.onDelete} />
                    </div>
                ) : (
                        <AddButton onClick={this.onAdd} />
                    )
                }
            </div>
        );
    }
}

function DangerAlert(props) {
    return (
        <h3 className="alert alert-danger">{props.text}</h3>
    );
}

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDangerAlertShowed: true }
        this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
    }

    toggleDangerAlert() {
        this.setState(prevState => ({
            isDangerAlertShowed: !prevState.isDangerAlertShowed
        }));
    }

    render() {
        return (
            <div>
                {this.state.isDangerAlertShowed ?
                    <DangerAlert text={'Внимание! В приложении возникли некоторые проблемы!'} /> : null}
                <button onClick={this.toggleDangerAlert}>
                    {this.state.isDangerAlertShowed ? 'Скрыть' : 'Показать'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));