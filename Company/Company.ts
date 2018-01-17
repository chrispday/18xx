import { Token } from "./Token";
import { Train } from "../Train";
import { Stock } from "./Stock";
import { Tile } from "../Board/Tile";

export class Company {
    Name: string;
    Tokens: Token[];
    Trains: Train[];
    Treasury: number;
    Stocks: Stock[];
    StockValue: number;
    ParValue: number;
    Home: Tile;
}