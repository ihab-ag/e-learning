import { getReq } from "./axios";

const route="admin/courses";
const token=localStorage.getItem("token")
export const getCourses=()=>{
    return getReq(route,token);
}