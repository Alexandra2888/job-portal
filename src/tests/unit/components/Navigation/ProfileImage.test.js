import { shallowMount } from "@vue/test-utils";

import ProfileImage from "@/components/navigation/ProfileImage.vue";

// eslint-disable-next-line no-undef
describe("ProfileImage", () => {
    // eslint-disable-next-line no-undef
    it("renders", () => {
        const wrapper = shallowMount(ProfileImage);
        // eslint-disable-next-line no-undef
        expect(wrapper.exists()).toBe(true);
    });
});
