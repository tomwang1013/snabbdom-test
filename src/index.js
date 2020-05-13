import { h, init } from 'snabbdom'

const patch = init([])

const MyComponent = props => {
  return h('h1', props.title)
}

// 组件的产出是 VNode
const prevVnode = MyComponent({ title: 'prev' })

// 将 VNode 渲染成真实 DOM
patch(document.getElementById('app'), prevVnode)
