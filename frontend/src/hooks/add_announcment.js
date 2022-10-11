import { postReq } from "./axios";

const route="intsructor/add-announcement";
const token=localStorage.getItem("token")
export const addAnnouncement=(data)=>{
    return postReq(route,data,token);
}