import React from 'react';

class AddArtistForm extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addArtist(this.state.name, this.state.description);

        this.setState({name: '', description: ''});
    }

    render() {
        return(
            <form id="add-artist-form" onSubmit={this.handleSubmit}>
                <div>
                    <div className="input-field">
                        <label htmlFor="name">Nom de l'artiste :</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="description">Description de l'artiste :</label>
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                </div>

                <button type="submit">Ajouter un artiste</button>
            </form>
        );
    }
}

export default AddArtistForm;