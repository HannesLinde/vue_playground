import {onMounted, /*watch,*/ ref} from "vue";

export default function useWindowWidth() {
    const width = ref(0);

    onMounted(() => {
        width.value = window.innerWidth;
    });
// this does not work --> not reactive!!
//     watch(width, async (newValue, oldValue) => {
//         const newWidth = window.innerWidth;
//         console.log(newWidth)
//         width.value = newWidth}
//     );
    window.addEventListener("resize", () => {
        return width.value = window.innerWidth;
    })


    return width;
}
