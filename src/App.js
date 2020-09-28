import React from 'react';
import Artist from "./Artist";
import AddArtistForm from "./AddArtistForm";
import AddAlbumForm from "./AddAlbumForm";

class App extends React.Component {
    state = {
        artists: [
            {
                name: 'Artiste 1',
                description: 'Lorem ipsum',
                albums: [
                    {
                        name: 'Album 1',
                        releaseDate: new Date(),
                        duration: 35,
                        titles: []
                    },
                    {
                        name: 'Album 2',
                        releaseDate: new Date(),
                        duration: 64,
                        titles: []
                    },
                    {
                        name: 'Album 3',
                        releaseDate: new Date(),
                        duration: 42,
                        titles: []
                    }
                ]
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
        displayAddArtistForm: false,
        displayAddAlbumForm: false,
        editedArtist: {}
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

    toggleAddAlbumForm = (artist) => {
        this.setState({ editedArtist: this.state.editedArtist.hasOwnProperty('name') ? {} : artist }, () => {
            this.setState({displayAddAlbumForm: !this.state.displayAddAlbumForm});
        });
    }

    addAlbum = (name, releaseDate, duration, editedArtist) => {
        this.setState({
            artists: [...this.state.artists].map(artist => {
                if (artist === editedArtist) {
                    artist.albums.push({
                        name: name,
                        releaseDate: new Date(releaseDate),
                        duration: duration
                    });
                }

                return artist;
            })
        }, () => {
            this.toggleAddAlbumForm(editedArtist);
        });
    }

    deleteAlbum = (albumToDelete, editedArtist) => {
        this.setState({
            artists: [...this.state.artists].map(artist => {
                if (artist === editedArtist) {
                    artist.albums = artist.albums.filter(album => album !== albumToDelete);
                }

                return artist;
            })
        });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Bibliothèque musicale</h1>
                </header>

                <main>
                    { this.state.displayAddArtistForm && <AddArtistForm addArtist={this.addArtist} /> }
                    { this.state.displayAddAlbumForm && <AddAlbumForm addAlbum={this.addAlbum} artist={this.state.editedArtist} /> }

                    <section id="artists">
                        <ul>
                            {
                                this.state.artists.map((artist, index) => {
                                    return (
                                        <Artist
                                            artist={artist}
                                            key={index}
                                            deleteArtist={() => {this.deleteArtist(artist)}}
                                            addAlbum={this.addAlbum}
                                            toggleAddAlbumForm={this.toggleAddAlbumForm}
                                            deleteAlbum={this.deleteAlbum}
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
