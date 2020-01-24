'use strict'

import React from 'react'
import ProtoType from 'prop-types'

const UserInfo = ({ userinfo }) => (

  <div className='user-info'>

    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>- Seguidores: {userinfo.followers}</li>
      <li>- Seguindo: {userinfo.following}</li>
    </ul>

  </div>
)

UserInfo.protoType = {
  userinfo: ProtoType.shape({
    username: ProtoType.string.isRequired,
    photo: ProtoType.string.isRequired,
    login: ProtoType.string.isRequired,
    repos: ProtoType.number.isRequired,
    followers: ProtoType.number.isRequired,
    following: ProtoType.number.isRequired
  })
}
export default UserInfo
