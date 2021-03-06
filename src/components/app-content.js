'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import ProtoType from 'prop-types'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos}
      />}

    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos:'
        repos={starred}
      />}
  </div>
)

AppContent.protoType = {
  userinfo: ProtoType.object,
  repos: ProtoType.array.isRequired,
  starred: ProtoType.array.isRequired,
  isFetching: ProtoType.bool.isRequired,
  handleSearch: ProtoType.func.isRequired,
  getRepos: ProtoType.func.isRequired,
  getStarred: ProtoType.func.isRequired
}

export default AppContent
