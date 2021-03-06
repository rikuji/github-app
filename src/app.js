'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUsername = username ? `${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${internalUsername}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })

      ajax.get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.data.name,
              photo: result.data.avatar_url,
              login: result.data.login,
              repos: result.data.public_repos,
              followers: result.data.followers,
              following: result.data.following
            },
            repos: [],
            starred: []
          })
        })
        .then(() => { this.setState({ isFetching: false }) })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax.get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.data.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            })
            )
          })
        })
    }
  }

  render (e) {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => { this.handleSearch(e) }}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}
export default App
