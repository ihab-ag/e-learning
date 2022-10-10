import AnnouncementRegister from "./announcement_register";
import Announcement from "./announcments";
import Assignment from "./assignments";
import AssignmentRegister from "./assignment_register";
import Course from "./course";
import CourseAssigner from "./course_assigner";
import CourseRegister from "./course_register";
import UserRegister from "./user_register";

const Page=({page})=>{
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
                   <> <CourseAssigner 
                   name="Course" />
                    <CourseAssigner 
                   name="Course" /></>
                )
            }
            {
                page === 'students' && (
                   <> <CourseAssigner 
                   name="Course" />
                    <CourseAssigner 
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