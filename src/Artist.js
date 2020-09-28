import React from 'react';

class Artist extends React.Component {
    render() {
        const { artist } = this.props;

        return(
            <li>
                <h2>{artist.name}</h2>
                <p>{artist.description}</p>
                <button onClick={() => {this.props.onClick()}} type="button" className="delete-artist">Supprimer l'artiste</button>
            </li>
        );
    }
}

export default Artist;