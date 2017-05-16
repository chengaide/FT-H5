import React, { Component } from 'react'
import {Projects} from '../components'
class Pro extends Component {
	render() {
		let {params}=this.props;
		return (
      	<div className="box">
       		<Projects params={params}/>
      </div>
		)
	}
}

export default Pro