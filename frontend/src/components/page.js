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
        </div>
    );
}

export default Page;