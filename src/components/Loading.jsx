import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div className='w-10 h-10 mt-[20%]'> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
      </div>
    )
  }
}

export default Loading
