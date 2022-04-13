import {shallowMount, mount} from "@vue/test-utils";
import PropsChildComponent from '../../src/components/PropsChildComponent.vue';
import MessageComponent from '../../src/components/MessageComponent.vue';
import {expect} from "chai";

describe('PropsChildComponent', () => {
    it('should render props message', () => {
    const wrapper = shallowMount(PropsChildComponent, {
        props: {
            littleMessage: 'Hola',
            littleList: ['Test1', 'Test2', 'Test3']
        }
    });
    expect(wrapper.text()).to.include('Hola');
    });
    it('should render html', () => {
        const wrapper = shallowMount(PropsChildComponent, {
            props: {
                littleMessage: 'Hola',
                littleList: ['Test1', 'Test2', 'Test3']
            }
        });
        console.log(wrapper.html())
        expect(wrapper.html()).to.include('</ul>');
    });
});

describe('MessageComponent', () => {
    it('displays message', () => {
        const wrapper = mount(MessageComponent, {
            props: {
                msg: 'Hello world'
            }
        })

        // Assert the rendered text of the component
        expect(wrapper.text()).to.include('Hello world')
    });
});
