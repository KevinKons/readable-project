import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {loadAllPostsAPI} from "../actions/post"
import {connect} from 'react-redux'
import PostCard from './PostCard'
import '../CSS/PostList.css'
import { Link } from 'react-router-dom'

class PostList extends Component {

    static propTypes = {
        posts: PropTypes.object.isRequired,
        selectedCategory: PropTypes.string.isRequired
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const {posts} = this.props.posts

        return (
            <div className='post_list_container'>
                <h1>Showing {this.props.selectedCategory} posts</h1>

                {
                    posts !== undefined &&
                    posts.map((post) => (
                        <Link to='/post'>
                            <PostCard
                                post={post}
                                key={post.id}
                            />
                        </Link>
                    ))
                }
            </div>

        )
    }

    directToPostPage = (post) => {
        console.log('tao');
        return (
            <div>
                <Link to='/post'/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts,
    selectedCategory: ownProps.selectedCategory
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(loadAllPostsAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)