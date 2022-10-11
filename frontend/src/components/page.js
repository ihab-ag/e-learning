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
import { getCourses } from "../hooks/all_courses";
import { getStudents } from "../hooks/all_students";

const Page= ({page})=>{
    const [instructors,setInstructors] = useState([]);
    const [courses,setCourses] = useState([]);
    const [students,setStudents] = useState('');
    useEffect(()=>{
        const fetchInstructors =async ()=>{
            const data = await getInstructors();
            setInstructors(data);
        }
        const fetchCourses =async ()=>{
            const data = await getCourses();
            setCourses(data);
        }
        const fetchStudents = async ()=>{
            const data = await getStudents();
            setStudents(data);
            console.log(students,data);
            // data being recieved and not being set no idea why
        }

        fetchCourses();
        fetchInstructors();
        fetchStudents();
    },[page,students])
        
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
                   {courses.data.courses.map(item=><CourseAssigner name={item.name} id={item._id} select={instructors}/> )}
                    
                   </>
                )
            }
            {
                page === 'students' && (
                   <> {<StudentAssigner 
                   name="Course" select={students}/>}
                   </>
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