import { Tile } from "./Tile";
import { Track } from "./Track";
import { HexSide } from "./HexSide";

describe("Tile", () => {
    it("constructor", () => {
        const result = new Tile();

        expect(result.Tracks).toEqual([]);
        expect(result.ExitCosts).not.toBeNull();
        expect(result.Neighbours).not.toBeNull();
    });
    describe("Equals", () => {
        it("is equal", () => {
            let tile1 = new Tile();
            tile1.Id = "1";
            let tile2 = new Tile();
            tile2.Id = "1";

            expect(tile1.Equals(tile2)).toBe(true);
        });
        it("not equal", () => {
            let tile1 = new Tile();
            tile1.Id = "1";
            let tile2 = new Tile();
            tile2.Id = "2";

            expect(tile1.Equals(tile2)).toBe(false);
        });
    });
    it("Rotate", () => {
        let tile = new Tile();
        let track1 = new Track();
        track1.Exits.Sides[HexSide.Top] = true;
        track1.Exits.Sides[HexSide.Bottom] = true;
        tile.Tracks.push(track1);
        let track2 = new Track();
        track2.Exits.Sides[HexSide.Top] = true;
        track2.Exits.Sides[HexSide.RightBottom] = true;
        tile.Tracks.push(track2);

        let rotated = tile.Rotate(3);

        expect(rotated.Tracks.length).toBe(2);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.Bottom]).toBe(true);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.Top]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.Bottom]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.LeftTop]).toBe(true);
    });
    it("All Rotations", () => {
        let tile = new Tile();
        let track1 = new Track();
        track1.Exits.Sides[HexSide.Top] = true;
        track1.Exits.Sides[HexSide.Bottom] = true;
        tile.Tracks.push(track1);
        let track2 = new Track();
        track2.Exits.Sides[HexSide.Top] = true;
        track2.Exits.Sides[HexSide.RightBottom] = true;
        tile.Tracks.push(track2);

        let rotations = tile.AllRotations();

        expect(rotations.length).toEqual(6);
        let rotated = rotations[0];
        expect(rotated.Tracks.length).toBe(2);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.Top]).toBe(true);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.Bottom]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.Top]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.RightBottom]).toBe(true);
        rotated = rotations[1];
        expect(rotated.Tracks.length).toBe(2);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.RightTop]).toBe(true);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.LeftBottom]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.RightTop]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.Bottom]).toBe(true);
        rotated = rotations[5];
        expect(rotated.Tracks.length).toBe(2);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.LeftTop]).toBe(true);
        expect(rotated.Tracks[0].Exits.Sides[HexSide.RightBottom]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.LeftTop]).toBe(true);
        expect(rotated.Tracks[1].Exits.Sides[HexSide.RightTop]).toBe(true);
    });
});