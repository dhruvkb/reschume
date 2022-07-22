import { Bio } from "./bio";
import { Institute } from "./education";
import { Epic } from "./creations";
import { Org } from "./work";

export { Date, Period, Coordinates, Address, Contact } from "./base";
export { Profile, Bio } from "./bio";
export { Certification, Institute } from "./education";
export { Technology, Project, Epic } from "./creations";
export { RoleType, RoleLocation, Role, Org } from "./work";

export interface Resume {
  bio: Bio;
  education: Institute[];
  creations: Epic[];
  work: Org[];
}
