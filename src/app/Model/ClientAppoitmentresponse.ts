import {Appointment} from "./Appointmenr";
import {petModel} from "./Pet";
import {Service} from "./Service";
import {Veto} from "./Veto";

export interface ClientAppoitmentresponse {
  veto:Veto
  pet: petModel,
  service:Service

}
