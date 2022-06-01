import {mount} from "@vue/test-utils";
import MainNav from "@/components/MainNav";

// eslint-disable-next-line no-undef
describe('MainNav', () => {
    // eslint-disable-next-line no-undef
    it("displays company name", () => {
        const wrapper = mount(MainNav)
        wrapper.setData({
            company: "Super Corp"
        });
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toMatch("Super Corp");
    });
});

