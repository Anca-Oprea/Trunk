import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {img} from 'react-mdl';
import{banner} from 'react-mdl';


class Landingpage extends Component{
	render(){
		return(
			<div style={{width: '100%', margin:'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					< img
					src= "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
					alt="avatar"
					className="avatar-img"
					/>
					
					<div className="banner-text">
						<h1>Fullstack web developer</h1>
					 <hr></hr>
					 <p> HTML/CSS | JavaScript | C# | NodeJS | </p>
					 
					 <div className="social-Links">
					 
					 {/*LinkeId */}
					 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
					 <i className="fa fa-Linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
					  </a>
					  
					  {/*Github */}
					  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
					  <i className="fa fa-github-square" aria-hidden="true"/>
					  </a>
					  
					  {/*Freecodecamp */}
					  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
					   <i className="fa fa-free-code-camp" aria-hidden="true"/>
					   </a>
					   
					     
					  {/*Youtube */}
					  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
					   <i className="fa fa-youtube-square" aria-hidden="true"/>
					   </a>
					   
					   
					 </div>
					</div>
					</Cell>
				</Grid>
			</div>

		)
	}
}

export default Landingpage;