import React from 'react';

class ArtistSelector extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    handleChange = (e) =>{
        this.props.handleChangeArtist(e.target.value);
    }

    render(){
        return (

            
            <form>  
                <select className="select-container" onChange = {this.handleChange} name="artist">
                    <option>Choose artist</option>
                    <option value="Adele">Adele</option>
                    <option value="Akon">Akon</option>
                    <option value="beyonce">Beyonce</option>
                    <option value="Bob Marley">Bob Marley</option>
                    <option value="coldplay">Coldplay</option>
                    <option value="Chris Brown">Chris Brown</option>
                    <option value="Drake">Drake</option>
                    <option value="Ed sheeran">Ed sheeran</option>
                    <option value="Maroon 5">Maroon 5</option>
                    <option value="michael+jackson">Michael</option>
                    <option value="Sam Smith">Sam Smith</option>
                    <option value="Justin Bieber">Justin Bieber</option>
                    <option value="Jay-z">Jay-z</option>
                    <option value="Post Malone">Post Malone</option>
                    <option value="Whitney+houston">Whitney Houston</option>
                </select>
            </form>
        );

    }
}

export default ArtistSelector;