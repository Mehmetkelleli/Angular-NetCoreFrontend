import { employe } from "./employe.Model";

export interface pay {
  employe:employe,
  totalWage:number,
  totalHours:number,
  roles:string[],
  totalPrice?:number,
  totalPriceHour?:number,
}
