import {shallowMount, mount} from "@vue/test-utils";
import PropsChildComponent from '../../src/components/PropsChildComponent.vue';
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
    it('should render props message', () => {
        const wrapper = shallowMount(PropsChildComponent, {
            props: {
                littleMessage: 'Hola',
                littleList: ['Test1', 'Test2', 'Test3']
            }
        });
        expect(wrapper.text()).to.include('Test2');
    });
});
