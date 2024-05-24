import Permission from "./Permission";

type TRole = {
  _id: string;
  name: string;
  permissions: Array<Permission>;
};

export default TRole;
