import React, { Component } from 'react';

class SearchTrack extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();

        this.props.handlerSearch(this.state.input)
    }

    handlerChangeInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <form className="search-track" onSubmit={this.handlerSubmit}>

                <input type="text"
                    value={this.state.input}
                    onChange={this.handlerChangeInput}
                    placeholder={this.props.placeholder} />

                <input type="submit" value="Search" />
            </form>
        );
    }
}


export default SearchTrack;
