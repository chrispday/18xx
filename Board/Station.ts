import { Token } from "../Company/Token";
import { Track } from "./Track";
import { Company } from "../Company/Company";

export class Station {
    Count: number;
    Tokens: Token[];
    Track: Track;

    constructor(count: number) {
        this.Count = count;
        this.Tokens = [];
    }

    CanPassThrough(company: Company): boolean {
        if (0 === this.Count) {
            return true;
        }

        if (this.Count > this.Tokens.length) {
            return true;
        }

        return this.Tokens.some(token => null == token || token.Owner === company.Name);
    }
}