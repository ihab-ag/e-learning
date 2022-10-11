import { postReq } from "./axios";

const route="refresh";
let token = localStorage.getItem("token");
export const refresh= async (token)=>{
    const res = await postReq(route," ",token);
    localStorage.setItem("token",res.data.authorisation.token);
}