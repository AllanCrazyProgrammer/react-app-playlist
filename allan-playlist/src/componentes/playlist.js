import React, { Component } from 'react';
import Media from "./media"

class Playlist extends Component {
    state = {}
    render() {
        console.log(this.props.data);
        const playlist = this.props.data.categories[0].playlist
        return (
            <div>
                {
                    playlist.map((item) => {
                        return <Media key={item.id} {...item}/>
                    })
                }

            </div>
        );
    }
}

export default Playlist;