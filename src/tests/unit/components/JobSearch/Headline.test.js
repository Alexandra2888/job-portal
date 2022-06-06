import Headline from "@/components/JobSearch/Headline";
import { mount} from "@vue/test-utils";
import {nextTick} from "vue";


// eslint-disable-next-line no-undef
describe("Headline", () => {
    // eslint-disable-next-line no-undef
    it("displays introductory action verb", () => {
        // eslint-disable-next-line no-undef
        jest.useFakeTimers("legacy");
        const wrapper = mount(Headline);
        const actionPhrase = wrapper.find("[data-test='action-phrase']");
        // eslint-disable-next-line no-undef
        expect(actionPhrase.text()).toBe("Build for everyone");
        // eslint-disable-next-line no-undef
        jest.useRealTimers();
    });

    // eslint-disable-next-line no-undef
    it("changes action verb at a consistent interval", ()=> {
        // eslint-disable-next-line no-undef
        jest.useFakeTimers("legacy");
        mount(Headline);
        // eslint-disable-next-line no-undef
        expect(setInterval).toHaveBeenCalled();
        // eslint-disable-next-line no-undef
        jest.useRealTimers();
    });

    // eslint-disable-next-line no-undef
    it("swaps action verb after first interval", async ()=> {
        // eslint-disable-next-line no-undef
        jest.useFakeTimers("legacy");
        const wrapper = mount(Headline);
        // eslint-disable-next-line no-undef
        jest.runOnlyPendingTimers();
        await nextTick();
        const actionPhrase = wrapper.find("[data-test='action-phrase']");
        // eslint-disable-next-line no-undef
        expect(actionPhrase.text()).toBe("Create for everyone")
    });

    // eslint-disable-next-line no-undef
    it("removes interval when component disapears", ()=> {
        // eslint-disable-next-line no-undef
        jest.useFakeTimers("legacy");
        const wrapper = mount(Headline);
        wrapper.unmount();
        // eslint-disable-next-line no-undef
        expect(clearInterval).toHaveBeenCalled();
        // eslint-disable-next-line no-undef
        jest.useRealTimers();
    });
});
