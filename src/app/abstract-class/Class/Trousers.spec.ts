// Trousers.spec.ts
import { Trousers } from "./Trousers";

describe("Trousers", () => {
    it("should create a Trousers instance", () => {
        expect(() => {
            const trousers = new Trousers("Casual Trousers", 32);
        }).not.toThrow();
    });

    it("should throw an error when creating a Trousers instance with invalid waist size", () => {
        expect(() => {
            const trousers = new Trousers("Casual Trousers", -10);
        }).toThrowError("Invalid size provided for Trousers");
    });

    it("should calculate cloth required for Trousers correctly", () => {
        const trousers = new Trousers("Casual Trousers", 32);
        expect(trousers.cloth()).toBeCloseTo(32 / 5.5);
    });

    it("should display Trousers details correctly", () => {
        const trousers = new Trousers("Casual Trousers", 32);
        expect(trousers.show()).toEqual("Назва: Casual Trousers, розмір: 32, витрати тканини: " + (32 / 5.5).toFixed(2));
    });
});
