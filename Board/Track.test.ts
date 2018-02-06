import { Track } from "./Track";
import { HexSide } from "./HexSide";

describe("Track", () => {
    it("constructor", () => {
        const result = new Track();

        expect(result.Exits).not.toBeNull();
    });
    it("RotateClockwise", () => {
        const x = new Track();
        x.Exits.Sides[HexSide.Top] = true;
        x.Exits.Sides[HexSide.RightTop] = false;
        x.Exits.Sides[HexSide.RightBottom] = false;
        x.Exits.Sides[HexSide.Bottom] = true;
        x.Exits.Sides[HexSide.LeftBottom] = true;
        x.Exits.Sides[HexSide.LeftTop] = false;

        let result = x.RotateClockwise();
        let result2 = result.RotateClockwise();
        let result3 = result2.RotateClockwise();

        expect(result.Exits.AsArray().map(e => e.item)).toEqual([false, true, false, false, true, true]);
        expect(result2.Exits.AsArray().map(e => e.item)).toEqual([true, false, true, false, false, true]);
        expect(result3.Exits.AsArray().map(e => e.item)).toEqual([true, true, false, true, false, false]);
    });
    describe("HasSomeExistsSame", () => {
        it("Same", () => {
            const x = new Track();
            x.Exits.Sides[HexSide.Top] = true;
            const y = new Track();
            y.Exits.Sides[HexSide.Top] = true;
            const z = new Track();
            z.Exits.Sides[HexSide.Bottom] = true;
    
            expect(x.HasSomeExitsSame([y, z])).toBe(true);
        });
        it("Different", () => {
            const x = new Track();
            x.Exits.Sides[HexSide.Top] = true;
            const y = new Track();
            y.Exits.Sides[HexSide.Bottom] = true;
            const z = new Track();
            z.Exits.Sides[HexSide.Bottom] = true;
    
            expect(x.HasSomeExitsSame([y, z])).toBe(false);
        });
    });
    describe("IsConnected", () => {
        it("Connected", () => {
            const x = new Track();
            x.Exits.Sides[HexSide.Top] = true;
            x.Exits.Sides[HexSide.LeftTop] = true;
            const y = new Track();
            y.Exits.Sides[HexSide.Bottom] = true;
    
            expect(x.IsConnected(y)).toBe(true);
        });
        it("Not Connected", () => {
            const x = new Track();
            x.Exits.Sides[HexSide.Top] = true;
            x.Exits.Sides[HexSide.LeftTop] = true;
            const y = new Track();
            y.Exits.Sides[HexSide.Top] = true;
    
            expect(x.IsConnected(y)).toBe(false);
        });
    });
});