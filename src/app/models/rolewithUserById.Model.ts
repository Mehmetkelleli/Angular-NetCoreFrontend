import { Role } from './Role.Model';
import { employe } from './employe.Model';
export interface rolewithUserById{
  role:Role;
  employes:employe[];
  nonEmployes:employe[];
}
