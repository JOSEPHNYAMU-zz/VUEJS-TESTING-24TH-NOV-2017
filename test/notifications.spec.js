import {mount} from 'vue-test-utils';
import Notifications from '../src/components/Notifications.vue';
import expect from 'expect';

describe('Notifications', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Notifications);
    });

    it('Hides notifications List', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });
    it('Adds Notifications', () => {

        let newNotifications = wrapper.find('.new');
        newNotifications.element.value = 'New Message in the Inbox';
        newNotifications.trigger('input');
        wrapper.find('button').trigger('click');
        expect(wrapper.find('ul').text()).toContain('');

    });
});
