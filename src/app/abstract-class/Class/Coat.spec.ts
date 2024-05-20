// Coat.spec.ts
import { Coat } from "./Coat";

describe("Coat", () => {
    it("should create a Coat instance", () => {
        expect(() => {
            const coat = new Coat("Winter Coat", 40);
        }).not.toThrow();
    });

    it("should throw an error when creating a Coat instance with invalid size", () => {
        expect(() => {
            const coat = new Coat("Winter Coat", -10);
        }).toThrowError("Invalid size provided for Coat");
    });

    it("should calculate cloth required for Coat correctly", () => {
        const coat = new Coat("Winter Coat", 40);
        expect(coat.cloth()).toBeCloseTo(40 / 6.25);
    });

    it("should display Coat details correctly", () => {
        const coat = new Coat("Winter Coat", 40);
        expect(coat.show()).toEqual("Назва: Winter Coat, розмір: 40, витрати тканини: " + (40 / 6.25).toFixed(2));
    });
});
