import React from 'react';
import Artist from "./Artist";
import AddArtistForm from "./AddArtistForm";

class App extends React.Component {
    state = {
        artists: [
            {
                name: 'Artiste 1',
                description: 'Lorem ipsum',
                albums: []
            },
            {
                name: 'Artiste 2',
                description: 'Lorem ipsum',
                albums: []
            },
            {
                name: 'Artiste 3',
                description: 'Lorem ipsum',
                albums: []
            }
        ],
        displayAddArtistForm: false
    }

    addArtist = (name, description) => {
        this.setState({
            artists: [...this.state.artists, {
                name: name,
                description: description,
                albums: []
            }],
            displayAddArtistForm: false
        });
    }

    deleteArtist = (artisttoDelete) => {
        this.setState({artists: [...this.state.artists].filter(artist => artist !== artisttoDelete)});
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Bibliothèque musicale</h1>
                </header>

                <main>
                    {
                        this.state.displayAddArtistForm &&
                            <AddArtistForm addArtist={this.addArtist} />
                    }

                    <section id="artists">
                        <ul>
                            {
                                this.state.artists.map((artist, index) => {
                                    return (
                                        <Artist
                                            artist={artist}
                                            key={index}
                                            onClick={() => {this.deleteArtist(artist)}}
                                        />
                                    );
                                })
                            }
                        </ul>
                    </section>
                </main>

                <footer>
                    <button
                        id="display-artist-form-btn"
                        onClick={() => { this.setState({displayAddArtistForm: !this.state.displayAddArtistForm}) }}
                    >
                        Ajouter un artiste
                    </button>
                </footer>
            </div>
        );
    }
}

export default App;
