import React, { Component } from 'react'
import { Froms } from '../components'
class From extends Component {
	render() {
		let { params } = this.props;
		console.log(params)
		let { id } = params;
		return (
			<div className="box">
				<Froms id={id} />
			</div>
		)
	}
}

export default From