import React from 'react';
import './media.css'
import PropTypes from 'prop-types'

class Media extends React.Component{

    state = {
        author: 'laaal'
    }

    handleClick = (event) =>{
    
        this.setState({
            author:'Allan Reyes'
        })
    }

    PropTypes = {
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,

    }
//WARNING! To be deprecated in React v17. Use componentDidMount instead.


    render(){

        const styles = {
            container: {
                fontSize: 14,
                cursor: 'pointer',
                color: '#44546b',
                width: 260,
                border: '1px solid red'
            }
        }

        return (
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img
                        src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3>{this.props.title}</h3>
                    <p>{this.state.author}</p>
                </div>
            </div>
        )
    }
}

export default Media;