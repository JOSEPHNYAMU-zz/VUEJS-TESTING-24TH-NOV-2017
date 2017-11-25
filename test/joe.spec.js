import {mount} from 'vue-test-utils';
import Joe from '../src/components/Joe.js';
import expect from 'expect';

describe('Joe', () => {
    let wrapper;
    beforeEach(() => {
wrapper  = mount(Joe);
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
