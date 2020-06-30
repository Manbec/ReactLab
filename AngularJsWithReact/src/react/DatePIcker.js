import React from "react";
import DatePicker from "react-datepicker/es";

export default class AppDatePicker extends React.Component{

	constructor(props){
		super(props)		
	}
	componentWillMount(){
		console.log("AppDatePicker Component mounting")
	}

	render(){
		const startDate = this.props.startDate || new Date();
		return (
			<DatePicker
				selected={startDate}
				onChange={date => this.props.setDate({date})}
				showTimeSelect
				showTimeSelectOnly
				timeIntervals={15}
				timeCaption="Time"
				dateFormat="h:mm aa"
			/>
		);
	}
}
