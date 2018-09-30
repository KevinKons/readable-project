import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class PostPage extends Component {

    render() {
        <div>
            <Route exact path='/post' render={() => (
                <div>
                    Post Page
                </div>
            )}/>
        </div>
    }
}

export default PostPage