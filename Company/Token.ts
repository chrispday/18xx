import { Tile } from "../Board/Tile";
import { Station } from "../Board/Station";

export class Token {
    Owner: string;
    Cost: number;
    SpecificTileCost: number;
    SpecificTile: Tile;
    Station: Station;
}