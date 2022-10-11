import { getReq } from "./axios";

const route="admin/instructors";
const token=localStorage.getItem("token")
export const getInstructors=()=>{
    return getReq(route,token);
}