import { employe } from "./employe.Model";

export interface personelTask{
  wageHours: number;
  wageHourState:boolean;
  state:boolean;
  currentDatetime:Date;
  employeId:string;
  employe:employe;
  id:string;
}
