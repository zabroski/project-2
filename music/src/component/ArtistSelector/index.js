import React from 'react';

class ArtistSelector extends React.Component {

    constructor(props){
        super(props);
    }

    handleChange = (e) =>{
        this.props.handleChangeArtist(e.target.value);
    }

    render(){
        return (
            <form>
                <select className="select-container" onChange = {this.handleChange} name="artist">
                    <option>Choose artist</option>
                    <option value="beyonce">Beyonce</option>
                    <option value="coldplay">Coldplay</option>
                    <option value="michael+jackson">Michael</option>
                    <option value="Ed sheeran">Ed sheeran</option>
                    <option value="Chris Brown">Chris Brown</option>
                    <option value="Bob Marley">Bob Marley</option>s
                    <option value="Justin Bieber">Justin Bieber</option>
                    <option value="Post Malone">Post Malone</option>
                    <option value="Adele">Adele</option>
                    <option value="Drake">Drake</option>
                    <option value="Whitney+houston">Whitney Houston</option>
                </select>
            </form>
        );

    }
}

export default ArtistSelector;