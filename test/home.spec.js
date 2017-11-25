import {mount} from 'vue-test-utils';
import Home from '../src/components/Home.vue';
import expect from 'expect';

describe('Home', () => {
    let wrapper;
    beforeEach(() => {
        wrapper  = mount(Home);
    });

    it('Defaults to count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it('Presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
    });

    it('Increments the Count', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('button').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });
});
