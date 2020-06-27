import React from 'react';
import './AddBookmark.css';

class AddBookmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            description: "",
            rating: 1
        };
    }
    titleChanged(title) {
        this.setState({
            title
        });
    }
    urlChanged(url) {
        this.setState({
            url
        });
    }
    descriptionChanged(description) {
        this.setState({
            description
        });
    }
    ratingChanged(rating) {
        this.setState({
            rating
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const {title, url, description, rating} = this.state;
        const bookmark = {title, url, description, rating};
        const options = {
            method: 'POST',
            body: JSON.stringify(bookmark),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer $2a$10$G7y7RyXQEpOdD5OhqND.OOPswUub2EDIZvyNoMV3sPLAO6hf6nOGK"
            }
        };

        fetch(url, options)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    title: "",
                    url: "",
                    description: "",
                    rating: 1
                });
                this.props.handleAdd(bookmark);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }
    render() {
        return (
            <div className="addbookmark">
                <h2>Add Bookmark</h2>
                <form className="addbookmark__form">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={(e) => this.titleChanged(e.target.value)}
                    />
                    <label htmlFor="url">Url:</label>
                    <input 
                        type="text" 
                        name="url" 
                        id="url" 
                        placeholder="url"
                        value={this.state.url}
                        onChange={(e) => this.urlChanged(e.target.value)}
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder="description"
                        value={this.state.description}
                        onChange={(e) => this.descriptionChanged(e.target.value)}
                    />
                    <label htmlFor="rating">Rating: </label>
                    <input
                        type="number"
                        name="rating"
                        id="rating"
                        min="1"
                        max="5"
                        value={this.state.rating}
                        onChange={(e) => this.ratingChanged(e.target.value)}
                    />
                    <div className="addbookmark__buttons">
                        <button 
                            onClick={(e) => this.props.showForm(false)}
                        >Cancel</button>
                        <button 
                            type="submit"
                            onClick={(e) => this.handleSubmit(this.state)} 
                        >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBookmark;