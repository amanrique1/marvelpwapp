import React, { Component } from 'react';
import Heroe from './heroe';

class HeroesList extends Component {
    state = {
        heroes: []
    }


    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('heroes') === null)
                this.setState({ heroes: [] })
            else
            {
                console.log(localStorage.getItem('heroes'));
                this.setState({ heroes: JSON.parse(localStorage.getItem('heroes') )});
            }
        }

        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=marvelapi&hash=7f63179ed893e0030792be6ed0674293&apikey=0b16b58a5f077c37421ce5a610433ca2")
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState({ heroes: res.data.results });
                let save = res.data.results.slice(0, 6);
                localStorage.setItem('heroes', JSON.stringify(save));
                console.log("carga:"+localStorage.getItem('heroes'));
                console.log(this.state.heroes);
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                    {this.state.heroes.map((e, i) => <Heroe key={i} heroe={e} />)}
                    </div>
                </div>
            </div>
        );
    }
}
export default HeroesList;