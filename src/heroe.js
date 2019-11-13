import React, { Component } from 'react'

export default class Heroe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.heroe.name,
            description: this.props.heroe.description,
            image: this.props.heroe.thumbnail.path
        }
    }


    render() {
        return (
            <div class="card" style="width: 18rem;">
                <img src={this.state.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{this.state.name}</h5>
                    <p class="card-text">{this.state.description}</p>
                </div>
            </div>
        )
    }
}
