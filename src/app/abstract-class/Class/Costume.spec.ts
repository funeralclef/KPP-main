// Costume.spec.ts
import { Costume } from "./Costume";

describe("Costume", () => {
    it("should create a Costume instance", () => {
        expect(() => {
            const costume = new Costume("Formal Costume", 180);
        }).not.toThrow();
    });

    it("should throw an error when creating a Costume instance with invalid height", () => {
        expect(() => {
            const costume = new Costume("Formal Costume", -10);
        }).toThrowError("Invalid height provided for Costume");
    });

    it("should calculate cloth required for Costume correctly", () => {
        const costume = new Costume("Formal Costume", 180);
        expect(costume.cloth()).toBeCloseTo(180 * 2 + 0.3);
    });

    it("should display Costume details correctly", () => {
        const costume = new Costume("Formal Costume", 180);
        expect(costume.show()).toEqual("Назва: Formal Costume, зріст: 180, Витрати тканини: " + (180 * 2 + 0.3).toFixed(2));
    });
});
