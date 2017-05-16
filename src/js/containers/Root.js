import React from 'react'
import routes from '../routes'
import { Router } from 'react-router'
import '../../../static/styles/normalize.scss'
import '../../../static/styles/app.scss'
//import '../../../static/styles/antdStyleReset.scss'
import '../../../static/styles/font.scss'
import '../../../static/styles/animations.scss'
import 'moment/locale/zh-cn'


const Root = ({  history }) => (
    <Router history={history} routes={routes} />
)

export default Root