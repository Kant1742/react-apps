import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function SpeedDetector(props) {
    if (props.speed >= props.maxSpeed) {
        return <div>SPEED LIMIT</div>;
    } else {
        return <div>Your speed is OK</div>;
    }
}

const MAX_SPEED_IN_CITY = 60

class SpeedRadar extends Component {
    constructor(props) {
        super(props);
        this.onChangeSpeed = this.onChangeSpeed.bind(this);
        this.state = { speed: null };
    }

    onChangeSpeed(e) {
        this.setState({ speed: e.target.value });
    }

    render() {
        const speed = this.state.speed;
        return (
            <div>
                <div>Input your speed:</div>
                <input value={speed} onChange={this.onChangeSpeed.bind(this)} />
                <SpeedDetector speed={parseFloat(speed)} maxSpeed={MAX_SPEED_IN_CITY} />
            </div>
        );
    }
}


const UNIT = {
    KPH: 'Км/ч',
    MPH: 'Миль/ч'
}

class SpeedSetter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { speed: '' }
    }

    onChange(e) {
        // this.setState({ speed: e.target.value })
        this.props.onChangeSpeed(e.target.value)
    }

    render() {
        let speed = this.state.speed
        let unit = this.props.unit

        return (
            <p>
                <span>Введите скорость в "{UNIT[unit]}": </span>
                <input value={speed} onChange={this.onChange} />
            </p>
        );
    }
}

class SpeedRadar extends Component {
    render() {
        const speed = this.state.speed;
        return (
            <div>
                <SpeedSetter unit='KPH' />
                <SpeedSetter unit='MPH' />
            </div>
        );
    }
}

function convertToKph(mph) {
    return mph * 1.61;
}

function convertToMph(kph) {
    return kph / 1.61;
}

function isValidSpeed(value) {
    if (value !== null && value !== '' && value !== undefined) {
        let intValue = parseInt(value);
        return !(isNaN(intValue) || !isFinite(intValue));
    }
    return false
}

function convertSpeed(value, convertor) {
    if (isValidSpeed(value)) {
        const intValue = parseInt(value)
        let converted = convertor(intValue);
        let rounded = Math.round(converted * 100) / 100
        return rounded.toString()
    }
    return '';
}


class SpeedSetter extends Component {
    constructor(props) {
        super(props)
        this.onChangeSpeed = this.onChangeSpeed.bind(this)
        this.state = { speed: '' }
    }

    onChangeSpeed(e) {
        this.setState({ speed: e.target.value })
    }

    render() {
        let speed = this.state.speed
        // ...остальной код
    }
}

class SpeedSetter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChangeSpeed(e.target.value);
    }

    render() {
        const speed = this.props.speed;
        const unit = this.props.unit;
        return (
            <p>
                <span>Введите скорость в "{UNIT[unit]}": </span>
                <input value={speed} onChange={this.onChange} />
            </p>
        );
    }
}

const MAX_SPEED_IN_CITY_IN_KPH = 60

class SpeedRadar extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
        this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
        this.state = { speed: 0, unit: 'KPH' };
    }

    onChangeSpeedInKph(speed) {
        this.setState({ unit: 'KPH', speed });
    }

    onChangeSpeedInMph(speed) {
        this.setState({ unit: 'MPH', speed });
    }

    render() {
        const unit = this.state.unit;
        const speed = this.state.speed;
        const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
        const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;

        return (
            <div>
                <SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph} />
                <SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph} />
                <SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH} />
            </div>
        );
    }
}
