import { personelTask } from "./personelTask.Model";

export interface employe{
  name:string;
  lastName:string;
  age:number;
  imagePath:string;
  personelTasks:personelTask[];
  id:string;
  userName:string;
  email:string;
}
