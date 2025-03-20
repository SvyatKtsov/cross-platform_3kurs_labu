export class Student {
    pib: string;
    group: string;
    gpa: number;
    stipendia: number;

    constructor(pib: string, group: string, gpa: number, stipendia: number) {
        this.pib = pib;
        this.group = group;
        this.gpa = gpa;
        this.stipendia = stipendia;
    }
}
