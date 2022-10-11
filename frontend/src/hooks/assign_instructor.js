import { postReq } from "./axios";

const route="admin/assign-instructor";
const token=localStorage.getItem("token")
export const assignInstructor=(data)=>{
    return postReq(route,data,token);
}