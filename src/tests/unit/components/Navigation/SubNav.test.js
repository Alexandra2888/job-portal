import { mount } from "@vue/test-utils";


import Subnav from "@/components/navigation/Subnav.vue";

// eslint-disable-next-line no-undef
describe("Subnav", () => {
    const createConfig = () => ({
        global: {
            stubs: {
                FontAwesomeIcon: true,
            },
        },
    });

    // eslint-disable-next-line no-undef
    describe("when user is on job page", () => {
        // eslint-disable-next-line no-undef
        it("displays job count", () => {
            const wrapper = mount(Subnav, createConfig());
            const jobCount = wrapper.find("[data-test='job-count']");
            // eslint-disable-next-line no-undef
            expect(jobCount.text()).toMatch("2 jobs matched");
        });
    });

    // eslint-disable-next-line no-undef
    describe("when user is not on jobs page", () => {
        // eslint-disable-next-line no-undef
        it("does NOT display job count", () => {
            const wrapper = mount(Subnav, createConfig());
            const jobCount = wrapper.find("[data-test='job-count']");
            // eslint-disable-next-line no-undef
            expect(jobCount.exists()).toBe(false);
        });
    });
});
