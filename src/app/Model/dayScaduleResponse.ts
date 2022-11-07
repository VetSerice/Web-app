import {Appointment} from "./Appointmenr";


export interface dayScaduleReponse {
  _id: string,
  date: Date,
  veterinaryId:string,
  appointments:Appointment

}
