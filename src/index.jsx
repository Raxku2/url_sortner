/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { Route, Router } from '@solidjs/router'
import HomeMain from './component/HomeMain.jsx'
import Concent from './page/Concent.jsx'
import Privacy from './page/Privacy.jsx'
import Terms from './page/Terms.jsx'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route component={App}>
            
            <Route path="/" component={HomeMain} />
            <Route path="/concent" component={Concent} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />

        </Route>
    </Router>
), root)
