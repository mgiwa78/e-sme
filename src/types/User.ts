import TRole from "./Role";

export interface TUser {
  _id?: string;
  avatar: string;
  username: string;
  fullName: string;
  contactNumber: string;
  email: string;
  role: TRole;
  password: string;
}

export const UserInitialValues = {
  avatar: "",
  username: "",
  email: "",
  fullName: "",
  contactNumber: "",
  role: "",
  password: "",
};
export const UserForEdit = {
  avatar: "",
  username: "",
  email: "",
  fullName: "",
  contactNumber: "",
  role: "",
  password: "",
};

export interface TUserInitialValues {
  _id?: string;
  avatar: string;
  username: string;
  fullName: string;
  contactNumber: string;
  email: string;
  role: string;
  password: string;
}
export interface TUserForEdit {
  _id?: string;
  avatar: string;
  username: string;
  fullName: string;
  contactNumber: string;
  email: string;
  role: TRole;
  password: string;
}
