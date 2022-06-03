import {mount} from "@vue/test-utils";
import MainNav from "@/components/MainNav";
import { shallowMount } from "@vue/test-utils";

// eslint-disable-next-line no-undef
describe('MainNav', () => {
    // eslint-disable-next-line no-undef
    it("displays company name", () => {
        const wrapper = shallowMount(MainNav)
        wrapper.setData({
            company: "New Careers"
        });
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toMatch("New Careers");
    });
});

// eslint-disable-next-line no-undef
it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    // eslint-disable-next-line no-undef
   expect(navigationMenuTexts).toEqual([
       "Teams",
       "Locations",
       "Life at New Careers",
       "How we hire",
       "Students",
       "Jobs"
   ]);
});

// eslint-disable-next-line no-undef
describe("when user logs in", () => {
    // eslint-disable-next-line no-undef
    it("displays user profile picture", async () => {
        const wrapper = mount(MainNav);
        let profileImage = wrapper.find("[data-test='profile-image']");
        // eslint-disable-next-line no-undef
        expect(profileImage.exists()).toBe(false);

        const loginButton = wrapper.find(("[data-test='login-button']"));
        await loginButton.trigger("click");

        profileImage = wrapper.find("[data-test='profile-image']");
        // eslint-disable-next-line no-undef
        expect(profileImage.exists()).toBe(true);
    });

    // eslint-disable-next-line no-undef
    it("displays subnavigation menu with additional information", async () => {
        const wrapper = shallowMount(MainNav);
        let subnav = wrapper.find("[data-test='subnav']");
        // eslint-disable-next-line no-undef
        expect(subnav.exists()).toBe(false);

        const loginButton = wrapper.find("[data-test='login-button']");
        await loginButton.trigger("click");

        subnav = wrapper.find("[data-test='subnav']");
        // eslint-disable-next-line no-undef
        expect(subnav.exists()).toBe(true);
    })
});
