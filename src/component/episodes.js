import React, { Component } from 'react';

class Episodes extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			episodes: []
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		fetch(
			'https://raw.githubusercontent.com/lvlsgroup/afripods-light-test/master/assets/data/episodes.json'
		)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					episodes: data
				});
			});
	}
	render() {
		const { loading, episodes } = this.state;
		return (
			<div>
				{!loading ? (
					episodes.map((episode) => {
						const { title, description, duration, created } = episode;
						return (
							<div key={title}>
								<p>{title}</p>
								<p>{description}</p>
								<p>{duration}</p>
								<p>{created}</p>
							</div>
						);
					})
				) : (
					// If there is a delay in data, let's let the user know it's loading
					<h3>Loading...</h3>
				)}
			</div>
		);
	}
}

export default Episodes;
