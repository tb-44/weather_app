import React from "react";
import PropTypes from "prop-types";
import "./CurrentWeather.css";

export default function CurrentWeather( { weather, reset } ) {
	//console.log(weather)

	const {
		  currentTemperature
		, humidity
		, icon
		, location
		, maxTemperature
		, minTemperature
		, wind
	} = weather;

	return (
		<div className="current-weather">
			<div className="current-weather_weather">
				<h3 className="current-weather_location">{ location }</h3>
				<img
					alt="sunny"
					className="current-weather_icon"
					src={ icon }
				/>
				<h3 className="current-weather_temp">{ currentTemperature }°</h3>

				<div className="current-weather_separator" />

				<ul className="current-weather_stats">
					<li className="current-weather_stat">High: { maxTemperature }°</li>
					<li className="current-weather_stat">Low: { minTemperature }°</li>
					<li className="current-weather_stat">Wind: { wind } MPH</li>
					<li className="current-weather_stat">Humidity: { humidity }%</li>
				</ul>
			</div>
			<button
				className="current-weather_search-again"
				onClick={ reset }
			>
				Search Again
			</button>
		</div>
	);
}

CurrentWeather.propTypes = {
	  reset: PropTypes.func
	, weather: PropTypes.shape( {
		  icon: PropTypes.string
		, currentTemperature: PropTypes.number
		, maxTemperature: PropTypes.number
		, minTemperature: PropTypes.number
		, wind: PropTypes.number
		, humidity: PropTypes.number
	} ).isRequired
};
