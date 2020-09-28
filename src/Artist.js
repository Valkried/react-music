import React from 'react';
import Album from "./Album";

class Artist extends React.Component {
    render() {
        const { artist } = this.props;

        return(
            <li className="artist">
                <div className="album-wrapper">
                    <div>
                        <h2>{artist.name}</h2>
                        <p>{artist.description}</p>
                    </div>

                    <ul>
                        {
                            artist.albums.map((album, index) => {
                                return(
                                    <Album key={index} album={album} deleteAlbum={() => {this.props.deleteAlbum(album, artist)}} />
                                );
                            })
                        }
                    </ul>
                </div>

                <div className="add-album-remove-artist-buttons">
                    <button onClick={() => {this.props.toggleAddAlbumForm(artist)}} type="button" className="add-album">Ajouter un album</button>
                    <button onClick={this.props.deleteArtist} type="button" className="delete-artist">Supprimer l'artiste</button>
                </div>
            </li>
        );
    }
}

export default Artist;