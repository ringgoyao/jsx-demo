import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    scope: Object,
    render: Function
  },
  render() {
    return this.render(this.scope)
  }
})
// export default {
//   functional: true,
//   props: {
//     scope: Object,
//     render: Function
//   },
//   render(h, ctx) {
//     console.log(h)
//     return ctx.props.render(h, ctx.props.scope)
//   }
// }
