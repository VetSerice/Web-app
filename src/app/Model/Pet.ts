import {Breed} from "./Breed";

export interface petModel{
  namepet: string,
  birthdate: string,
  age: string,
  weight:string
  breed: Breed,
  femaleOrMale: string
  owner: string
  vaccinationRecord:string
  medialRecord :string
  nextApplicationDate: string,
  id:string

}
