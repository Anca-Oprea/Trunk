import React , {Component} from 'react';
import {Tabs, Tab,  Grid, Cell,Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl"; 
import {constructor} from 'react';
import {toogleCategories} from 'react-mdl'



class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 3 };
    }
		toggleCategories(){
		
		 if(this.state.activeTab===0){
	return (
	<Card shadow={5} style={{minWidth :'450', margin:'autor'}}>
		<CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover'}}>
		</CardTitle>

		<CardText>
		React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. 
		It is maintained by Facebook and a community of individual developers and companies.

       
		</CardText>
		<CardActions>
			<Button colored>GitHub</Button>
			<Button colored>CodePen</Button>
			<Button colored>LiveDemo</Button>
		</CardActions>
			<CardMenu style={{color:'#fff'}}>
			<IconButton name="share" />
			</CardMenu>
	</Card>
	)
	}else if(this.state.activeTab===1){
		return (
	<Card shadow={5} style={{minWidth :'450', margin:'autor'}}>
		<CardTitle style={{color:'#fff', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png) center/cover'}}>
		</CardTitle>

		<CardText>
		Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
       
		</CardText>
		<CardActions>
			<Button colored>GitHub</Button>
			<Button colored>CodePen</Button>
			<Button colored>LiveDemo</Button>
		</CardActions>
			<CardMenu style={{color:'#fff'}}>
			<IconButton name="share" />
			</CardMenu>
	</Card>
	)
	}else if(this.state.activeTab===2){
		return (
	<Card shadow={5} style={{minWidth :'450', margin:'autor'}}>
		<CardTitle style={{color:'#fff', height:'176px', background:'url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center/cover'}}>
		</CardTitle>

		<CardText>
	MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.
	MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).
		</CardText>
		<CardActions>
			<Button colored>GitHub</Button>
			<Button colored>CodePen</Button>
			<Button colored>LiveDemo</Button>
		</CardActions>
			<CardMenu style={{color:'#fff'}}>
			<IconButton name="share" />
			</CardMenu>
	</Card>
		)
	}else if(this.state.activeTab===3){
		return (
	<Card shadow={5} style={{minWidth :'450', margin:'autor'}}>
		<CardTitle style={{color:'#fff', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png) center/cover'}}>
		</CardTitle>

		<CardText>
	C# (pronounced see sharp, like the musical note C♯, but written with the number sign) is a general-purpose,
	multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.
		</CardText>
		<CardActions>
			<Button colored>GitHub</Button>
			<Button colored>CodePen</Button>
			<Button colored>LiveDemo</Button>
		</CardActions>
			<CardMenu style={{color:'#fff'}}>
			<IconButton name="share" />
			</CardMenu>
	</Card>
		)
	
}
	}
	
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>MongoDB</Tab>
					<Tab>C#</Tab>
                </Tabs>
				    <section ClassName="projects-grid">
						<Grid className="projects-grid">
						<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
						</Cell>
						
						</Grid>
				
					</section>
					
            </div>    
        )
    }
}
export default Projects;