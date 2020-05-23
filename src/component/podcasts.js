import React, { Component } from "react";

class Podcasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      podcasts: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://raw.githubusercontent.com/lvlsgroup/afripods-light-test/master/assets/data/podcasts.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          podcasts: data,
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
              <div key={title} className="flex-container">
                <h1>{title}</h1>
                <h4> {numberOfEpisodes}</h4>
                <p>{description}</p>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default Podcasts;
