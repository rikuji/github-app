'use strict'

import React from 'react'
import ProtoType from 'prop-types'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do úsuario'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.protoType = {
  handleSearch: ProtoType.func.isRequired
}

export default Search
