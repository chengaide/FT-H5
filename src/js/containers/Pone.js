import React, { Component } from 'react'
import {PoneItem} from '../components'
import { Link } from 'react-router'
class Pone extends Component {
	render() {
		return (
      	<div className="box">
		 <Link to={"home"} >
		 	<PoneItem />
		 </Link>
       		
      </div>
		)
	}
}

export default Pone