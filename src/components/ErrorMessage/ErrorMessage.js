import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.css";

export default function ErrorMessage({ reset }) {
    return (
        <div className="error-message">
            <h3 className="error-message_message">There is a problem fetching the weather!</h3>
            <button
                className="error-message_try-again"
                onClick={reset}
            >
                Try again?
			</button>
        </div>
    );
}

ErrorMessage.propTypes = {
    reset: PropTypes.isRequired
};