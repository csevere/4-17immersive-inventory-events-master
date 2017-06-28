import React, {Component} from 'react'

class Toggle extends Component{
	constructor(props) {
		super(props);
		this.state = {
			toggleOn: true
		}
		console.log(this.state.toggleOn)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState({
			toggleOn: !this.state.toggleOn
		})
	}

	render(){
		if(this.state.toggleOn){
			var isToggleOn = "On"
			var pic = "https://www.tropical-islands.de/fileadmin/_processed_/csm_2017-02-21_TI_stage-suedsee_ff052c344c.jpg"
		}else{
			var isToggleOn = "Off"
			var pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmv_yePHW7oMkFExglJZpSUyl5fAX75nSQQPzYEqw8KqxLQNTkS15tXFG"
		}
		return(
			<button onClick={this.handleClick}>
				{isToggleOn}
			</button>
		)
	}
}

export default Toggle;