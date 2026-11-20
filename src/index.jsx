/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { Route, Router } from '@solidjs/router'
import HomeMain from './component/HomeMain.jsx'
import Concent from './page/Concent.jsx'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route component={App}>
            <Route path="/"  component={HomeMain} />
            <Route path="/concent"  component={Concent} />

        </Route>
    </Router>
), root)
