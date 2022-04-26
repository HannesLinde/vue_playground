import {mount} from "@vue/test-utils";
import LifecycleHooksChild from '@/components/LifecycleHooksChild.vue';
import {expect} from "chai";


describe('All unit tests for lifecycle hooks main component', () => {

    const wrapper = mount(LifecycleHooksChild);

    it('should render something', () => {
        expect(wrapper.html()).to.include('<h4>Here I am!</h4>');
    });
});
