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
import { getInstructorCourses } from "../hooks/instructor_courses";

const Page= ({page})=>{
    const [instructors,setInstructors] = useState([]);
    const [courses,setCourses] = useState([]);
    const [instructor_courses,setInstructorCourses] = useState([]);
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
        }
        const fetchInstructorCourses = async ()=>{
            const data = await getInstructorCourses();
            setInstructorCourses(data);
        }

        fetchCourses();
        fetchInstructors();
        fetchStudents();
        fetchInstructorCourses();
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
                   <>
                    {instructor_courses.data['courses'].map(item=><StudentAssigner name={item.name} id={item._id} select={students}/> )}
                   </>
                )
            }
            {
                page === 'assignment' && (
                   <AssignmentRegister courses={instructor_courses}/>
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
            {
                page === '' && (
                    <></>
                )
            }
        </div>
    );
}

export default Page;