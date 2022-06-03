import { mount } from "@vue/test-utils";
import SubNav from "@/components/SubNav";

// eslint-disable-next-line no-undef
describe("SubNav", () => {
    // eslint-disable-next-line no-undef
    describe("when user is opn job page", () => {
        // eslint-disable-next-line no-undef
        it("displays job count", () => {
            const wrapper = mount(SubNav, {
                global: {
                 stubs: {
                     FontAwesomeIcon: true
                 }
,                },
                data() {
                    return {
                        onJobResultsPage: true
                    };
                },
            });
            const jobCount = wrapper.find("[data-test='job-count']");
            // eslint-disable-next-line no-undef
            expect(jobCount.exists()).toBe(true);
        });
    });
    // eslint-disable-next-line no-undef
    describe("when user is not on job page", () => {
        // eslint-disable-next-line no-undef
        it("does not display job count", () => {
            const wrapper = mount(SubNav, {
                data() {
                    return {
                        onJobResultsPage: true,
                    };
                },
            });
            const jobCount = wrapper.find("[data-test='job count']");
            // eslint-disable-next-line no-undef
            expect(jobCount.exists()).toBe(false);
        })
    })
})
