import AnnouncementRegister from "./announcement_register";
import Announcement from "./announcments";
import Assignment from "./assignments";
import AssignmentRegister from "./assignment_register";
import Course from "./course";
import CourseAssigner from "./course_assigner";
import CourseRegister from "./course_register";
import StudentAssigner from "./student_assigner";
import UserRegister from "./user_register";
import { getInstructors } from "../hooks/all_instructors";
import { useEffect, useState } from "react";

const Page= ({page})=>{
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{
        const fetchInstructors =async ()=>{
            const data = await getInstructors();
            await setInstructors(data);
        }
        if(page=='assign')
        fetchInstructors();
    }
        ,[])
        
    return(
        <div className="page flex-center">
            {
                page === 'user' && (
                    <UserRegister />
                )
            }
            {
                page === 'course' && (
                    <CourseRegister />
                )
            }
            {
                page === 'assign' && (
                   <>
                    <CourseAssigner 
                   name="Course" select={instructors}/></>
                )
            }
            {
                page === 'students' && (
                   <> <StudentAssigner 
                   name="Course" />
                    <StudentAssigner 
                   name="Course" /></>
                )
            }
            {
                page === 'assignment' && (
                   <AssignmentRegister />
                )
            }
            {
                page === 'announcement' && (
                    <AnnouncementRegister />
                )
            }
            {
                page === 'courses' && (
                    <> <Course
                   name="Course" />
                    <Course
                   name="Course" /></>
                )
            }
            {
                page === 'assignments' && (
                    <Assignment />
                )
            }
            {
                page === 'announcements' && (
                    <Announcement text="new announcement" />
                )
            }
        </div>
    );
}

export default Page;