import React from 'react';
import { render } from '@testing-library/react';
{/* <form>
<label>
  Name: <input type="text" name="name" />
</label>
<input type="submit" value="Submit" />
</form> */}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '' };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p><label> Логин: <input type="text" name="login" value={this.state.login}
                    onChange={this.onChangeLogin} /></label></p>
                <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                    onChange={this.onChangePassword} /></label></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        );
    }
}

ReactDOM.render(<LoginForm />, document.getElementById('root'))



{/* <textarea>
Дорогие посетители сайта! Желаем вам приятного изучения React.
</textarea> */}

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', message: 'Текст сообщения' };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        alert(`Сообщение успешно отправлено получателю "${this.state.email}"`);
        event.preventDefault();
    }

    onChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p><label> email получателя: <input type="text" name="email" value={this.state.email}
                    onChange={this.onChangeEmail} /></label></p>
                <p><label>Текст сообщения: <textarea type="text" name="message" value={this.state.message}
                    onChange={this.onChangeMessage} /></label></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        );
    }
}

ReactDOM.render(<MessageForm />, document.getElementById('root'));


// <select>
//     <option value="C++">C++</option>
//     <option value="Java">Java</option>
//     <option value="C#">C#</option>
//     <option selected value="JavaScript">JavaScript</option>
//     <option value="Scala">Scala</option>
// </select>

class LanguageForm exports Component {
    constructor(props) {
        super(props);
        this.state = { language: 'JavaScript' };

        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ language: event.target.value });
    }

    onSubmit(event) {
        alert(`Вы выбрали язык: ${this.state.language}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Select language
                {/* <select multiple={true} value={['B', 'C']}> */}
                    <select value={this.state.language}>
                        <option value="C++">C++</option>
                        <option value="Java">Java</option>
                        <option value="C#">C#</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Scala">Scala</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// ReactDOM.render(<LanguageForm/>, getElementById('root'));


{/* <input type="file" /> */ }
// Its value read-only, so we cannot use it in the same ways as above


class PersonForm extends Component {
    constructor(props) {
        super(props);

        this.state = { sex: 'female', firstName: '', lastname: '', email: '', phone: '' };
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(event) {
        const name = event.target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form>
                <label>First Name: <input name="firstName" type="text"
                    value={this.state.firstName} onChange={this.onChangeInput} /></label>
                <label> Last Name: <input name="lastName" type="text"
                    value={this.state.lastName} onChange={this.onChangeInput} /></label>
                <label> Email: <input name="email" type="email"
                    value={this.state.email} onChange={this.onChangeInput} /></label>
                <label> Phone: <input name="phone" type="tel"
                    value={this.state.phone} onChange={this.onChangeInput} /></label>
                <label> Sex: <select name="sex" value={this.state.sex} onChange={this.onChangeInput}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </label>
            </form>
        );
    }
}

// var partialState = {};
// partialState[name] = value;
// this.setState(partialState);

// The same as above 
    // this.setState({
    //     [name]: value
    //   });

ReactDOM.render(<PersonForm />, document.getElementById('root'));
