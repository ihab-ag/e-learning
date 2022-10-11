import { getReq } from "./axios";

const route="intsructor/courses";
const token=localStorage.getItem("token")
export const getInstructorCourses=()=>{
    return getReq(route,token);
}