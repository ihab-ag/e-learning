import { postReq } from "./axios";

const route="admin/add-course";
const token=localStorage.getItem("token")
export const registerCourse=(data)=>{
    return postReq(route,data,token);
}