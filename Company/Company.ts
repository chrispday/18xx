import { Token } from "../Token";
import { Train } from "../Train";
import { Stock } from "./Stock";
import { Hex } from "../Board/Hex";

export class Company {
    Name: string;
    Tokens: Token[];
    Trains: Train[];
    Treasury: number;
    Stocks: Stock[];
    StockValue: number;
    ParValue: number;
    Home: Hex;

    CanReachHex(hex: Hex): boolean {
        return this.Tokens
            .filter(token => null != token.Tile)
            .some(token => token.Tile.Hex.CanReachHex(hex));
    }
}