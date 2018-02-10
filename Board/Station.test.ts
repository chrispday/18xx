import { Station } from "./Station";
import { Company } from "../Company/Company";
import { Token } from "../Company/Token";

describe("Station", ()=> {
    it("constructor", () => {
        const result = new Station(2);

        expect(result.Count).toBe(2);
        expect(result.Tokens).toEqual([]);
    });
    describe("CanPassThrough", ()=> {
        it("No stations", () =>{
            const station = new Station(2);
            const company = new Company();
            company.Name = "A Company";

            const result = station.CanPassThrough(company);

            expect(result).toBe(true);
        });
        it("Tokened", () =>{
            const station = new Station(2);
            const company = new Company();
            company.Name = "A Company";
            station.Tokens.push(new Token());
            station.Tokens[0].Owner = company.Name;
            station.Tokens.push(new Token());
            station.Tokens[1].Owner = "An Owner" 

            const result = station.CanPassThrough(company);

            expect(result).toBe(true);
        });
        it("Tokened out", () =>{
            const station = new Station(2);
            const company = new Company();
            company.Name = "A Company";
            station.Tokens.push(new Token());
            station.Tokens[0].Owner = "Another owner";
            station.Tokens.push(new Token());
            station.Tokens[1].Owner = "An Owner" 

            const result = station.CanPassThrough(company);

            expect(result).toBe(false);
        });
    });
});