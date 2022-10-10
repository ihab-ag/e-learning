import AssignmentRegister from "./assignment_register";
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
            
        </div>
    );
}

export default Page;