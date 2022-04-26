import {mount} from "@vue/test-utils";
import LifecycleHooksMain from '@/views/LifecycleHooksMain.vue';
import {expect} from "chai";


describe('All unit tests for lifecycle hooks main component', () => {

    const wrapper = mount(LifecycleHooksMain);

    it('should render something', () => {
        expect(wrapper.html()).to.include('h3');
    });
});
