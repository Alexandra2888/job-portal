import {shallowMount} from "@vue/test-utils";

import ProfileImage from "@/components/ProfileImage";

// eslint-disable-next-line no-undef
describe("profileImage", () => {
    // eslint-disable-next-line no-undef
    it("renders", () => {
        const wrapper = shallowMount(ProfileImage);
        // eslint-disable-next-line no-undef
        expect(wrapper.exists()).toBe(true);
    })
})
