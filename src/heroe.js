import React, { Component } from 'react'

export default class Heroe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.heroe.name,
            description: this.props.heroe.description,
            image: this.props.heroe.thumbnail.path + "/standard_large." + this.props.heroe.thumbnail.extension
        }
    }


    render() {
        return (
            <div className="card bg-light mb-3 col-md-4">
                <img src={this.state.image} className="card-img-top" alt={this.state.image+" image"} height="200" width="200" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text">{this.state.description}</p>
                </div>
            </div>
        )
    }
}
