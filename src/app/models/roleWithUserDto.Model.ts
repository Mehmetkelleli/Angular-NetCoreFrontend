import { Role } from './Role.Model';
import { employe } from './employe.Model';
export interface roleWithUserDto{
  role:Role;
  employes:employe[];
}
