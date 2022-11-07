import {Appointment} from "./Appointmenr";
import {petModel} from "./Pet";
import {Service} from "./Service";
import {Clients} from "./Client";

export interface VetoAppoitmentResponse {
  client:Clients,
  pet: petModel,
  service:Service

}
