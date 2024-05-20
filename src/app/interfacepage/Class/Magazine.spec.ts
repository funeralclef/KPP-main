import { Magazine } from "./Magazine";
describe ('Magazine Testing', ()=> {
    let magazine:Magazine; 
    let date = new Date (2024, 4, 25);
    beforeEach(()=>{ 
        magazine = new Magazine ("'Літературні вислови'", 100, date, "'Веселі брати'" ,"Журнал");
    })

    it ("Створення екземпляру класу", ()=>{ 
        expect(magazine).toBeTruthy(); 
    })

    it ("Отримання статусу продукту", ()=>{ 
        let exmp1 = magazine.status;
        let exmp2 = "";
        let date = new Date();
        let day = (magazine.expDate.getTime() - date.getTime())/(24 * 60 * 60 * 1000);
        if (day >= 7) {
            exmp2 = "Новий випуск";
        } else {
            exmp2 = "Випуск застарілий, ціну знижено на 25%";
        }
        expect(exmp1).toBe(exmp2);
    })

    it ("Отримання знижки на продукт", ()=>{ 
        let exmp1 = magazine.getDiscouted;
        let exmp2:number;
        switch(magazine.status){
            case "Новий випуск":
                exmp2 = magazine.price;
                break;
            case "Випуск застарілий, ціну знижено на 25%":
                exmp2 = magazine.price*0.75;
                break;
            default:exmp2 = magazine.price;
        }
        
        expect(exmp1).toBe(exmp2.toFixed(2));
    })
});
