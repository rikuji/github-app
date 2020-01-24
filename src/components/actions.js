'use strict'

import React from 'react'
import ProtoType from 'prop-types'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Actions.protoType = {
  getRepos: ProtoType.func.isRequired,
  getStarred: ProtoType.func.isRequired
}

export default Actions
