import { Tile } from "./Tile/Tile";
import { Station } from "./Tile/Station";

export class Token {
    Owner: string;
    Cost: number;
    SpecificHexCost: number;
    SpecificHexRow: string;
    SpecificHexColumn: string;
    Tile: Tile;
    Station: Station;
}