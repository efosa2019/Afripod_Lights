import React, { Component } from 'react';

class Podcasts extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			podcasts: []
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		fetch(
			'https://raw.githubusercontent.com/lvlsgroup/afripods-light-test/master/assets/data/podcasts.json'
		)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					podcasts: data
				});
			});
	}
	render() {
		const { loading, podcasts } = this.state;
		return (
			<div>
				{!loading ? (
					podcasts.map((podcast) => {
						const { title, numberOfEpisodes, description } = podcast;
						return (
							<div key={title}>
								<p>{title}</p>
								<p> {numberOfEpisodes}</p>
								<p>{description}</p>
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

export default Podcasts;
