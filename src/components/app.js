import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCategory } from '../actions';
import axios from 'axios';

class App extends Component {
	constructor(){
		super();
		this.state = {
			content: {
				category: "",
				icon_url: "",
				id: "",
				url: "",
				value: "",

			},
			auth: false,
			text: "Choose a category"
		}
	}
	componentWillMount() {
		this.props.showCategory()
	}

	categoryContent(cat) {
		this.setState({
			auth: false,
			text: "Loading..."
		});
		const url = 'https://api.chucknorris.io/jokes/random?category=' + cat;
		axios.get(url)
			.then((response) => {
				this.setState({
					content: response.data,
					auth: true
				});
			});
		
	}

		

	renderCategoryList() {
		return this.props.category.map((category) => {
			return (
				<li key={category}>
					<button onClick={() => this.categoryContent(category)}>{category}</button>
				</li>
			)
		})
	}

	render() {
	    return (
	      <div>
	      	<h2>Category List</h2>
	      	<ul>
	      		{ this.renderCategoryList() }
	      	</ul>
	      	{this.state.auth ? (
		      	<div>
			      	<p>
				      	Category : {this.state.content.category} 
			      	</p>
			      	<p>
			      		icon_url : {this.state.content.icon_url} 
		      		</p>
		      		<p>
				      	id : {this.state.content.id} 
			      	</p>
			      	<p>
				      	url : {this.state.content.url} 
			      	</p>
			      	<p>
			      		value : {this.state.content.value}
			      	</p>
		      	</div>
	      	) : (<p>{this.state.text}</p>)}
	      </div>
	    );
	    
	}
}

function mapStateToProps(state) {
	return {
		category: state.category.list
	}
}

export default connect(mapStateToProps, { showCategory })(App)