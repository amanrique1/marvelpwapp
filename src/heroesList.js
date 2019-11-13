import React, { Component } from 'react';
import Heroe from './heroe';

class HeroesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroes: []
        };
    }

    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('heroes') === null)
                this.setState({ heroes: [] })
            else
                this.setState({ heroes: localStorage.getItem('heroes') });
        }

        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=marvelapi&hash=7f63179ed893e0030792be6ed0674293&apikey=0b16b58a5f077c37421ce5a610433ca2")
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState({ heroes: res.data.results });
                let save=this.state.heroes.slice(0,4);
                localStorage.setItem('heroes', save);
            });
    }

    render() {
        return (
            <div className="row">
                {this.state.heroes.map((e, i) => <Heroe key={i} heroe={e} />)}
            </div>
        );
    }
}
export default HeroesList;