import { postReq } from "./axios";

const route="intsructor/assign-student";
const token=localStorage.getItem("token")
export const assignStudent=(data)=>{
    return postReq(route,data,token);
}