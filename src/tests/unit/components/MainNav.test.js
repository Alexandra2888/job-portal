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

// eslint-disable-next-line no-undef
it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("li");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text())
   expect(navigationMenuTexts).toEqual({
       "Teams",
       "Locations",
       "Life at New Careers",
       "How we hire",
       "Students",
       "Jobs"
   })
})
