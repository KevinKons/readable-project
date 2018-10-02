import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import SingleOptionSelector from './SingleOptionSelector'
import  PostList  from './PostList'
import PostPage from './PostPage'
import { loadCategoriesAPI } from "../actions/categories";
import CreateNewPost from './CreateNewPost'
import Modal from 'react-modal'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

    state = {
        selectedCategory: 'all',
        newPostModalOpen: false
    }


    componentWillMount() {
        this.props.getCategories()
    }

    render() {
        const {selectedCategory, newPostModalOpen} = this.state;

        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' render={() => (
                        <div>
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
                    )}/>
                </Switch>

                <Route path='/post' render={() => (
                    <PostPage></PostPage>
                )}/>

            </div>
        );
    }

    openNewPostModal = () => {
        this.setState(() => ({
            newPostModalOpen: true
        }))
    };

    closeNewPostModal = () => {
        this.setState(() => ({
            newPostModalOpen: false
        }))
    }
}

const mapStateToProps = (categories) => ({
    categories: categories.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(loadCategoriesAPI())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
