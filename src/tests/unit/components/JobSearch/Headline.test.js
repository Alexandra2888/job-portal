import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import Headline from "@/components/jobSearch/Headline.vue";

// eslint-disable-next-line no-undef
describe("Headline", () => {
    // eslint-disable-next-line no-undef
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        jest.useFakeTimers("legacy");
    });

    // eslint-disable-next-line no-undef
    afterEach(() => {
        // eslint-disable-next-line no-undef
        jest.useRealTimers();
    });

    // eslint-disable-next-line no-undef
    it("displays introductory action verb", () => {
        const wrapper = mount(Headline);
        const actionPhrase = wrapper.find("[data-test='action-phrase']");
        // eslint-disable-next-line no-undef
        expect(actionPhrase.text()).toBe("Build for everyone");
    });

    // eslint-disable-next-line no-undef
    it("changes action verb at a consistent interval", () => {
        mount(Headline);
        // eslint-disable-next-line no-undef
        expect(setInterval).toHaveBeenCalled();
    });

    // eslint-disable-next-line no-undef
    it("swaps action verb after first interval", async () => {
        const wrapper = mount(Headline);
        // eslint-disable-next-line no-undef
        jest.runOnlyPendingTimers();
        await nextTick();
        const actionPhrase = wrapper.find("[data-test='action-phrase']");
        // eslint-disable-next-line no-undef
        expect(actionPhrase.text()).toBe("Create for everyone");
    });

    // eslint-disable-next-line no-undef
    it("removes interval when component disappears", () => {
        const wrapper = mount(Headline);
        wrapper.unmount();
        // eslint-disable-next-line no-undef
        expect(clearInterval).toHaveBeenCalled();
    });
});
