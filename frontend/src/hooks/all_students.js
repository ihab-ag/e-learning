import { getReq } from "./axios";

const route="intsructor/students";
const token=localStorage.getItem("token")
export const getStudents=()=>{
    return getReq(route,token);
}