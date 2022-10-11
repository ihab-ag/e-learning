import { postReq } from "./axios";

const route="admin/add-user";
const token=localStorage.getItem("token")
export const register=(data)=>{
    return postReq(route,data,token);
}