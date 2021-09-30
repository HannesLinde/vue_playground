    <template>
        <p>Props: {{littleMessage}}</p>
        <ul>
            <li v-for="item in littleList" :key="item">{{item}}</li>
        </ul>
    </template>
    <script lang="ts">
        import { defineComponent } from 'vue';

        export default defineComponent({
            name:'string-component',
            props:{
                littleMessage: {
                type: String,
                required: false,
                default: 'I am default props'
            },
                littleList: {
                    type: Array,
                    required: false,
                    default: function() {
                        return ["This","is","default"]
                    }
                } 
            }
        })
    </script>


