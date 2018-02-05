import { HexSides } from "./HexSides";
import { HexSide } from "./HexSide";

describe("HexSides", () => {
    it("constructor", () => {
        const x = new HexSides<boolean>();
        x.Sides[HexSide.Top] = true;
        expect(x.Sides[HexSide.Top]).toBe(true);
    });
    it("RotateClockwise", () => {
        const x = new HexSides<string>();
        x.Sides[HexSide.Top] = "Top";
        x.Sides[HexSide.RightTop] = "RightTop";
        x.Sides[HexSide.RightBottom] = "RightBottom";
        x.Sides[HexSide.Bottom] = "Bottom";
        x.Sides[HexSide.LeftBottom] = "LeftBottom";
        x.Sides[HexSide.LeftTop] = "LeftTop";

        const y = x.RotateClockwise();

        expect(y.Sides[HexSide.Top]).toBe("LeftTop");
        expect(y.Sides[HexSide.RightTop]).toBe("Top");
        expect(y.Sides[HexSide.RightBottom]).toBe("RightTop");
        expect(y.Sides[HexSide.Bottom]).toBe("RightBottom");
        expect(y.Sides[HexSide.LeftBottom]).toBe("Bottom");
        expect(y.Sides[HexSide.LeftTop]).toBe("LeftBottom");
    });
});
