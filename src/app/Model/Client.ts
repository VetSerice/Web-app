import {Breed} from "./Breed";
import {VetAdress} from "./VetAdress";

export interface Clients{
  name: string,
  breed : Breed,
  femaleOrMale: string,
  nameClient: string,
  email: string,
  password: string,
  phone: string,
  address:VetAdress

}
