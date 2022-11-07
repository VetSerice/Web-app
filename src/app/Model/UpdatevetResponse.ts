import {VetAdress} from "./VetAdress";
import {VetHeadOfMedics} from "./vetHeadOfMedics";
import {MYBreakHoursResponse} from "./MYBreakHoursResponse";

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
  "Break_Hours":MYBreakHoursResponse
}
