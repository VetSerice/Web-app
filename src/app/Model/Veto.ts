import { VetAdress} from "./VetAdress";
import {MYBreakHoursResponse} from "./MYBreakHoursResponse";
import {VetHeadOfMedics} from "./vetHeadOfMedics";

export interface Veto{
  _id: string,
  name: string,
  email: string,
  password: string,
  phone: string,
  vetAddress:VetAdress
  vetHeadOfMedics: VetHeadOfMedics,
  Education: string,
  Specialization: string,
  Availability: string,
  Experience: string,
  valid:boolean
  "Break_Hours":MYBreakHoursResponse
}
