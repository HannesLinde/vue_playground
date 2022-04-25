import {mount} from "@vue/test-utils";
import PropsChildComponent from '@/components/PropsChildComponent.vue';
import {expect} from "chai";

describe('Feed props into PropsChildComponent', () => {

    const wrapper = mount(PropsChildComponent, {
        props: {
            littleMessage: 'Hola',
            littleList: ['Test1', 'Test2', 'Test3']
        }
    });

    it('should render props message', () => {
        expect(wrapper.text()).to.include('Hola');
    });

    it('should render props list in a list', () => {
        wrapper.props().littleList.forEach((prop: string) => expect(wrapper.text()).to.include(prop));
        expect(wrapper.text()).to.include('Test2');
        expect(wrapper.html()).to.contain('li');
    });
});
