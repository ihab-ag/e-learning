import { getReq } from "./axios";

const route="refresh";
let token = localStorage.getItem("token");
export const refresh= async ()=>{
    const res = await getReq(route,token);
    localStorage.setItem("token",res.data.authorisation.token);
    window.location.reload();
}