import {toRefs, onMounted, reactive, watch} from "vue";

export default function useWindowWidth() {
    const state = reactive({
        width: 0
    });

    onMounted(() => {
        state.width = window.innerWidth;
    });
// this does not really work --> not reactive!!
    watch(state, (newValue, oldValue) => {
        const newWidth = window.innerWidth;
        console.log(newWidth)
        newValue.width = newWidth})


    return {
        ...toRefs(state)
    };
}
