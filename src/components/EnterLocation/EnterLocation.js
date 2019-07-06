import React, { Component } from "react";
import { connect } from "react-redux";
import { setWeather } from '../../reducer/weather';
import "./EnterLocation.css";
class EnterLocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setWeather(this.state.location)

        this.setState({
            location: ""
        });
    }

    render() {
        return (
            <form
                className="enter-location"
                onSubmit={this.handleSubmit}
            >
                <input
                    className="enter-location_input"
                    onChange={this.handleChange}
                    placeholder="London / 84601"
                    type="text"
                    value={this.state.location}
                />
                <button
                    className="enter-location_submit"
                >
                    Submit
        </button>
            </form>
        );
    }
}

export default connect(state => state, { setWeather })(EnterLocation);