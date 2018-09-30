import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import SingleOptionSelector from './SingleOptionSelector'
import  PostList  from './PostList'
import { loadCategoriesAPI } from "../actions/categories";
import CreateNewPost from './CreateNewPost'
import Modal from 'react-modal'

class App extends Component {

    state = {
        selectedCategory: 'all',
        newPostModalOpen: false
    }


    componentWillMount() {
        this.props.getCategories()
    }

    render() {
        const {selectedCategory, newPostModalOpen} = this.state

        return (
            <div className="App">
                <SingleOptionSelector/>
                <SingleOptionSelector/>
                <button onClick={this.openNewPostModal}>New post</button>

                <PostList selectedCategory={selectedCategory}/>

                <Modal
                    isOpen={newPostModalOpen}
                    onRequestClose={this.closeNewPostModal}
                    ariaHideApp={false}
                    >
                    <CreateNewPost
                        categories={this.props.categories.categories}
                    />
                </Modal>
            </div>
        );
    }

    openNewPostModal = () => {
        this.setState(() => ({
            newPostModalOpen: true
        }))
    }

    closeNewPostModal = () => {
        this.setState(() => ({
            newPostModalOpen: false
        }))
    }
}

const mapStateToProps = (categories) => ({
    categories: categories.categories
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(loadCategoriesAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
