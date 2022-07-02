import { Bio } from "./bio";
import { Institute } from "./education";
import { Epic } from "./projects";
import { Org } from "./roles";

export { Date, Period, Coordinates, Address, Contact } from "./base";
export { Profile, Bio } from "./bio";
export { Certification, Institute } from "./education";
export { Technology, Project, Epic } from "./projects";
export { RoleType, RoleLocation, Role, Org } from "./roles";

export interface Resume {
  bio: Bio;
  education: Institute[];
  projects: Epic[];
  roles: Org[];
}
