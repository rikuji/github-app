'use strict'

import React from 'react'
import ProtoType from 'prop-types'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do úsuario'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.protoType = {
  handleSearch: ProtoType.func.isRequired,
  isDisabled: ProtoType.bool.isRequired
}

export default Search
