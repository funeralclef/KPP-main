import { Discipline } from "./discipline";

export class Student {
    name: string = '';
    group: string = '';
    grade: number = 0;
    grant: number = 0;
    disciplines: Discipline[];
    constructor (name:string, group:string, grade: number, grant: number, disciplines: Discipline[] ) {
        this.name = name;
        this.group = group;
        this.grade = grade;
        this.grant = grant;
        this.disciplines = disciplines;
    }
    // ПІБ студента.
    // • Група.
    // • Середній бал.
    // • Стипендія.
    //Інформаціє, яка додається динамічно:
    //• Список дисциплін і бали за них
}

export { Discipline };
