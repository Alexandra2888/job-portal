import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/navigation/MainNav.vue";



// eslint-disable-next-line no-undef
describe("MainNav", () => {
    const createConfig = () => ({
        global: {
            stubs: {
                "router-link": RouterLinkStub,
            },
        },
    });

    // eslint-disable-next-line no-undef
    it("displays company name", () => {
        const $store = {
            state: {
                isLoggedIn: false,
            },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toMatch("Bobo Careers");
    });

    // eslint-disable-next-line no-undef
    it("displays menu items for navigation", () => {
        const $store = {
            state: {
                isLoggedIn: false,
            },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        const navigationMenuItems = wrapper.findAll(
            "[data-test='main-nav-list-item']"
        );
        const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
        // eslint-disable-next-line no-undef
        expect(navigationMenuTexts).toEqual([
            "Teams",
            "Locations",
            "Life at Bobo",
            "How we hire",
            "Students",
            "Jobs",
        ]);
    });

    // eslint-disable-next-line no-undef
    describe("when user is logged out", () => {
        // eslint-disable-next-line no-undef
        it("prompts user to sign in", () => {
            const $store = {
                state: {
                    isLoggedIn: false,
                },
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const loginButton = wrapper.find("[data-test='login-button']");
            // eslint-disable-next-line no-undef
            expect(loginButton.exists()).toBe(true);
        });

        it("issues call to Vuex to login user", async () => {
            // eslint-disable-next-line no-undef
            const commit = jest.fn();
            const $store = {
                state: {
                    isLoggedIn: false,
                },
                commit,
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const loginButton = wrapper.find("[data-test='login-button']");

            await loginButton.trigger("click");

            // eslint-disable-next-line no-undef
            expect(commit).toHaveBeenCalledWith("LOGIN_USER");
        });
    });

    // eslint-disable-next-line no-undef
    describe("when user is logged in", () => {
        // eslint-disable-next-line no-undef
        it("displays user profile picture", () => {
            const $store = {
                state: {
                    isLoggedIn: true,
                },
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const profileImage = wrapper.find("[data-test='profile-image']");
            // eslint-disable-next-line no-undef
            expect(profileImage.exists()).toBe(true);
        });

        // eslint-disable-next-line no-undef
        it("displays subnavigation menu with additional information", () => {
            const $store = {
                state: {
                    isLoggedIn: true,
                },
            };
            const wrapper = shallowMount(MainNav, createConfig($store));

            const subnav = wrapper.find("[data-test='subnav']");
            // eslint-disable-next-line no-undef
            expect(subnav.exists()).toBe(true);
        });
    });
});
