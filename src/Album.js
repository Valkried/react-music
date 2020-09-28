import React from "react";

class Album extends React.Component {
    render() {
        const { album } = this.props;

        return(
            <li className="album">
                <h3>{album.name}</h3>
                <p>Date de sortie : {album.releaseDate.toLocaleDateString()}</p>
                <p>Durée totale : {album.duration} minutes</p>
                <button onClick={this.props.deleteAlbum}>Supprimer l'album</button>
            </li>
        );
    }
}

export default Album;