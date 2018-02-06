import { HexSides } from "./HexSides";
import { HexSide } from "./HexSide";

function CreateHexSides() {
    const x = new HexSides<string>();
    x.Sides[HexSide.Top] = "Top";
    x.Sides[HexSide.RightTop] = "RightTop";
    x.Sides[HexSide.RightBottom] = "RightBottom";
    x.Sides[HexSide.Bottom] = "Bottom";
    x.Sides[HexSide.LeftBottom] = "LeftBottom";
    x.Sides[HexSide.LeftTop] = "LeftTop";
    return x;
}

describe("HexSides", () => {
    it("constructor", () => {
        const x = new HexSides<boolean>();
        x.Sides[HexSide.Top] = true;
        expect(x.Sides[HexSide.Top]).toBe(true);
    });
    it("RotateClockwise", () => {
        const x = CreateHexSides();

        const result = x.RotateClockwise();

        expect(result.Sides[HexSide.Top]).toBe("LeftTop");
        expect(result.Sides[HexSide.RightTop]).toBe("Top");
        expect(result.Sides[HexSide.RightBottom]).toBe("RightTop");
        expect(result.Sides[HexSide.Bottom]).toBe("RightBottom");
        expect(result.Sides[HexSide.LeftBottom]).toBe("Bottom");
        expect(result.Sides[HexSide.LeftTop]).toBe("LeftBottom");
    });
    it("AsArray", () => {
        const x = CreateHexSides();

        const result = x.AsArray();

        expect(result).toEqual([
            { side: HexSide.Top, item: "Top" },
            { side: HexSide.RightTop, item: "RightTop" },
            { side: HexSide.RightBottom, item: "RightBottom" },
            { side: HexSide.Bottom, item: "Bottom" },
            { side: HexSide.LeftBottom, item: "LeftBottom" },
            { side: HexSide.LeftTop, item: "LeftTop" },
        ]);
    });
    describe("HasSame", () => {
        it("Same", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();

            const result = x.HasSame(y);

            expect(result).toBe(true);
        });
        it("Different Top", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.Top] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
        it("Different LeftTop", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.LeftTop] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
        it("Different LeftBottom", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.LeftBottom] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
        it("Different Bottom", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.Bottom] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
        it("Different RightBottom", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.RightBottom] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
        it("Different RightTop", () => {
            const x = CreateHexSides();
            const y = CreateHexSides();
            y.Sides[HexSide.RightTop] = "Different";

            const result = x.HasSame(y);

            expect(result).toBe(false);
        });
    });
    describe("HasOpposite", () => {
        describe("Top/Bottom", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.Top] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.Bottom] = "Same";
                
                expect(x.HasOpposite(y, HexSide.Top));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.Top] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.Bottom] = "Different";
                
                expect(x.HasOpposite(y, HexSide.Top));
            });
        });
        describe("RightTop/LeftBottom", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.RightTop] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.LeftBottom] = "Same";
                
                expect(x.HasOpposite(y, HexSide.RightTop));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.RightTop] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.LeftBottom] = "Different";
                
                expect(x.HasOpposite(y, HexSide.RightTop));
            });
        });
        describe("LeftTop/RightBottom", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.LeftTop] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.RightBottom] = "Same";
                
                expect(x.HasOpposite(y, HexSide.LeftTop));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.LeftTop] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.RightBottom] = "Different";
                
                expect(x.HasOpposite(y, HexSide.LeftTop));
            });
        });
        describe("Bottom/Top", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.Bottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.Top] = "Same";
                
                expect(x.HasOpposite(y, HexSide.Bottom));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.Bottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.Top] = "Different";
                
                expect(x.HasOpposite(y, HexSide.Bottom));
            });
        });
        describe("RightBottom/LeftTop", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.RightBottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.LeftTop] = "Same";
                
                expect(x.HasOpposite(y, HexSide.RightBottom));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.RightBottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.LeftTop] = "Different";
                
                expect(x.HasOpposite(y, HexSide.RightBottom));
            });
        });
        describe("LeftBottom/RightTop", () => {
            it ("Same", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.LeftBottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.RightTop] = "Same";
                
                expect(x.HasOpposite(y, HexSide.LeftBottom));
            });
            it("Different", () => {
                const x = new HexSides<string>();
                x.Sides[HexSide.LeftBottom] = "Same";
                const y = new HexSides<string>();
                x.Sides[HexSide.RightTop] = "Different";
                
                expect(x.HasOpposite(y, HexSide.LeftBottom));
            });
        });
    });
});
