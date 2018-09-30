import React, {Component} from 'react'
import '../CSS/CreateNewPost.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addPostAPI} from "../actions/post";

const uuidv1 = require('uuid/v1');

class CreateNewPost extends Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    state = {
        author: '',
        title: "",
        selectedCategory: this.props.categories[0].name,
        body: ""
    }

    render() {
        const { author, title, selectedCategory, body} = this.state;

        return (
            <div className="new_post_container">
                <input type="text"
                       name="author"
                       placeholder="Author"
                       className="new_post_detail_fiel"
                       value={author}
                       onChange={(event) => this.handleAuthorChange(event.target.value)}
                />

                <input type="text"
                       name="title"
                       placeholder="Title"
                       className="new_post_detail_fiel"
                       value={title}
                       onChange={(event) => this.handleTitleChange(event.target.value)}
                />

                <div className="radio_group_button">
                    {
                        this.props.categories.map(category => (
                            <label key={category.path}>
                                <input type="radio" value={category.name}
                                       checked={selectedCategory === category.name}
                                       onChange={(event) => this.handleCategoryChange(event.target.value)}/>
                                {category.name}
                            </label>
                        ))
                    }
                </div>

                <textarea name="body"
                          id=""
                          cols="30"
                          rows="15"
                          value={body}
                          onChange={(event) => this.handleBodyChange(event.target.value)}
                />

                <button onClick={this.handlePublish}>
                    publish
                </button>
            </div>
        )
    }

    handleAuthorChange = (value) => {
        this.setState({
            author: value.trim()
        })
    }

    handleTitleChange = (value) => {
        this.setState({
            title: value.trim()
        })

    }

    handleCategoryChange = (value) => {
        this.setState({
            selectedCategory: value
        })
    }

    handleBodyChange = (value) => {
        this.setState({
            body: value.trim()
        })
    }

    handlePublish = () => {
        const { author, title, body, selectedCategory} = this.state;

        if(!author || !title || !body) {
            return
        }

        const post = {
            id: uuidv1(),
            timestamp: Date.now,
            title,
            body,
            author,
            category: selectedCategory
        }

        this.props.addPost(post);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPostAPI(post))
    }
}

export default connect(null, mapDispatchToProps)(CreateNewPost);