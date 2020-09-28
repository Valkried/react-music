import React from 'react';

class AddAlbumForm extends React.Component {
    state = {
        name: '',
        releaseDate: new Date(),
        duration: 0
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addAlbum(this.state.name, this.state.releaseDate, this.state.duration, this.props.artist);

        this.setState({name: '', releaseDate: new Date(), duration: 0});
    }

    render() {
        const { artist } = this.props;
        const { name, releaseDate, duration } = this.state;

        return(
            <form className="add-form add-album-form" onSubmit={this.handleSubmit}>
                <div>
                    <div className="input-field">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="releaseDate">Date de sortie :</label>
                        <input type="date" id="releaseDate" name="releaseDate" value={releaseDate} onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="duration">Durée totale :</label>
                        <input type="number" id="duration" name="duration" value={duration} onChange={this.handleChange} />
                    </div>
                </div>

                <button type="submit">Ajouter un album à l'artiste {artist.name}</button>
            </form>
        );
    }
}

export default AddAlbumForm;