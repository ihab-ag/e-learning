import { postReq } from "./axios";

const route="intsructor/add-assignment";
const token=localStorage.getItem("token")
export const addAssignment=(data)=>{
    return postReq(route,data,token);
}