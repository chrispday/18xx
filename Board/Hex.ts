import { Tile } from "../Tile/Tile";
import { HexSides } from "../HexSides";
import { Colour } from "../Colour";

export class Hex {
    Name?: string; // eg. Z, Chicago
    Tile: Tile;
    Neighbours: HexSides<Hex>;
    Blocked: HexSides<boolean>; // Exits can't be on these sides
    Row: string;
    Column: string;
    Cost: number;
    ExitCosts: HexSides<number>;

    CanUpgrade(upgradeTo: Tile): boolean {
        return this.Tile.CanUpgrade(upgradeTo);
    }
}