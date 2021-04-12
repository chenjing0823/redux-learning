import * as React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../types'

interface Iprops {
  value: number
}
const Counter = ({ value }: Iprops) => {
  return <p>cliked: {value} times</p>
}
// 使用 connect 高阶组件对 Counter 进行包裹
export default connect((state: StoreState) => {
  // const { state: number } = state
  console.log(state)
  return {
    value: state,
  }
})(Counter)
// export default Counter
