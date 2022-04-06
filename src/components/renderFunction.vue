<script>
import { h, reactive } from 'vue'

export default {
setup() {
const state = reactive({
count: 0
})

function increment() {
state.count++
}

// return the render function
return () =>
h(
'div',
{
onClick: increment
},
`Does this work? Click the number! ${state.count}`
)}
}
</script>
