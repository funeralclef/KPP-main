import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorGrant } from "./validatorGrant.service";

export function gradeValidator(): ValidatorFn {
    return (
        // створюємо контрол
        control: AbstractControl
    ): { [key:string]:boolean} | null => {
        //оголошення нового валідатора
        let validator = new ValidatorGrant;
        let valid = validator.validate_grant(control.value)
        return valid ? null : {number:true}
    }
}