import React, { Component } from 'react';

class sortBox extends Component {
    render() {
        return (
            <form className="sort-box" onChange={this.props.handlerSort}>
                <strong>Sort:</strong>
                {this.props.options.map((value, index) =>
                    <div key={index}>
                        <input type="radio"
                            id={`sort-${value}`}
                            name="sort"
                            checked={this.props.value === value}
                            value={value} />
                        <label htmlFor={`sort-${value}`}>{value}</label>
                    </div>
                )}
            </form>
        );
    }
}


export default sortBox;
