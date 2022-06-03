import { mount} from "@vue/test-utils";

import BaseButton from "@/components/BaseButton";

// eslint-disable-next-line no-undef
describe("BaseButton", ()=> {
    // eslint-disable-next-line no-undef
    it("renders text", () => {
        const wrapper = mount(BaseButton, {
            props: {
                text: "I am clickable",
                type: "primary"
            }
        });
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toMatch("I am clickable")
    });

    // eslint-disable-next-line no-undef
    it("applies one or several styles to button", () => {
        const wrapper = mount(BaseButton, {
            props: {
                type: "primary",
            }
        });
        const button = wrapper.find("button");
        // eslint-disable-next-line no-undef
        expect(button.classes("primary")).toBe(true)
    })
})
