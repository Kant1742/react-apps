import React, { Component } from 'react';
import cookie from 'react-cookies';
import 'whatwg-fetch';

class PostCreate extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            draft: false,
            title: null,
            content: null,
            publish: null
        }
    }

    createPosts(data) {
        const endpoit = '/api/posts/'
        const csrfToken = cookie.load('csrftoken')
        let thisComp = this
        if (csrfToken !== undefined) {
            let lookupOptions = {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                body: JSON.stringify(data),
                credentials: 'include'
            }

            fetch(endpoit, lookupOptions).then(
                function (response) {
                    return response.json()
                }).then(function (responseData) {
                    console.log(responseData)
                }).catch(function (errors) {
                    console.log("error", errors)
                })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let data = this.state
        if (data['draft'] === 'on') {
            data['draft'] = true
        } else {
            data['draft'] = false
        }
        this.createPosts(data)
    }

    handleInputChange(event) {
        event.preventDefault()
        let key = event.target.name
        let value = event.target.value
        if (key === 'title') {
            if (value.length > 120) {
                alert('10 chars in the title')
            }
        }
        this.setState({
            [key]: value
        })
    }

    componentDidMount() {
        this.setState({
            draft: false,
            title: null,
            content: null,
            publish: null
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for='title'>Post title</label>
                    <input type="text" id='title' name='title' className='form-control' placeholder='Blog Post title' onChange={this.handleInputChange} required='required' />
                </div>
                <div className="form-group">
                    <label for='title'>Content</label>
                    <textarea name="content" id="content" className='form-control' placeholder='Blog Post content' onChange={this.handleInputChange} required='required'></textarea>
                </div>
                <div className="form-group">
                    <label for='draft'>
                        <input type="checkbox" id='draft' name='draft' className='mr-2' onChange={this.handleInputChange} />
                            Draft</label>
                </div>
                <div className="form-group">
                    <label for='publish'>Publish date</label>
                    <input type="date" id='publish' name='publish' className='form-control' onChange={this.handleInputChange} required='required' />
                </div>
                <button className='btn btn-primary'>Save</button>
            </form>
        )
    }
}

export default PostCreate