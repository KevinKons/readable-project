import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../CSS/PostCard.css';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { votePostAPI } from "../actions/post";
import { Link } from 'react-router-dom'


class PostCard extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    }


    render() {
        const {title, author, timestamp, voteScore, id} = this.props.post;

        return (
            <div className="post_card_container">
                <div className="post_card_info1">
                    <Link to='/post'>
                        <h1>{title}</h1>
                    </Link>
                    <h3>{author}</h3>
                </div>

                <div className="post_card_info2">
                    <h3>{timestamp}</h3>
                    <div className="post_card_voteScore_content">
                        <h3>{voteScore}</h3>
                        <button onClick={() => this.handleUpVote(id)}>
                            <FaThumbsUp/>
                        </button>

                        <button onClick={() => this.handleDownVote(id)}>
                            <FaThumbsDown/>
                        </button>
                    </div>
                </div>
            </div>
        )


    }

    handleUpVote = (id) => {
        this.props.vote(id, 'upVote');
    };

    handleDownVote = (id) => {
        this.props.vote(id, 'downVote');
    };

}

const mapStateToProps = (state, ownProps) => {
    console.log(state.posts.posts.find((post) => post.id === ownProps.post.id))
    return {
        post: state.posts.posts.find((post) => post.id === ownProps.post.id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        vote: (id, voteScore) => dispatch(votePostAPI(id, voteScore)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
