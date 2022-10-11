import { postReq } from "./axios";

const route="login"
export const login= (data) =>{
   return postReq(route,data);
}