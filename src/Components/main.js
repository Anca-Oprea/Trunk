import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom' ;
import Aboutme from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';


const Main = ()=> (
	<Switch>
	   <Route exact path="/" component={LandingPage} />
	    <Route  path="/aboutme" component={Aboutme} />
		 <Route  path="/contact" component={Contact} /> 
		 <Route path="/projects" component={Projects} />
		  <Route  path="/resume" component={Resume} />
	</Switch>
)
	export default Main;
	