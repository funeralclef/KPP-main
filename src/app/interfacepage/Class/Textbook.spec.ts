import { Textbook } from "./Textbook";

describe ('Textbook Testing', ()=> {
    let tbook:Textbook; 
       beforeEach(()=>{ 
        tbook = new Textbook ("'Література 8 клас'", 375, "Підручник", "О.М. Авраменко", 8);
    })

    it ("Створення екземпляру класу", ()=>{ 
        expect(tbook).toBeTruthy();
    })

    it ("Перевірка року навчання", ()=>{
        let exmp1 = tbook.IsGrade(5);
        let exmp2:boolean;
        exmp2 = true;
        if (5 == tbook.recommendedGrade) exmp2 = true;
        else exmp2 = false;
        expect(exmp1).toBe(exmp2); 
    })
});
