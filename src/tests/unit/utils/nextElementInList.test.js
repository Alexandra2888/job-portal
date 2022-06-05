import nextElementInList from "@/utils/nextElementInList";

// eslint-disable-next-line no-undef
describe ("nextElementInList", () => {
    // eslint-disable-next-line no-undef
    it("locates element in list and returns the next element in list", () => {
        const list = ["A", "B", "C", "D", "E"];
        const value = "C";
        const result = nextElementInList(list, value);
        // eslint-disable-next-line no-undef
        expect(result).toBe("D");
    });

    // eslint-disable-next-line no-undef
    describe ("when the element is at the end of the list", () => {
        // eslint-disable-next-line no-undef
        it("locates next element at start of the list", () => {
            const list = ["A", "B", "C", "D", "E"];
            const value = "E";
            const result = nextElementInList(list, value);
            // eslint-disable-next-line no-undef
            expect(result).toBe("a");
        });
    });
});
