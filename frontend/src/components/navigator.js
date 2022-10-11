import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navigator= ({pageChange})=>{

    const location = useLocation();
    const pathname = location.pathname;

    useEffect(()=>{
        if(pathname==='/admin')
            pageChange('user');
        else if(pathname==='/instructor')
            pageChange('students');
        else
        pageChange('courses');
    },[pathname,pageChange])

    
    return (
        <>
        {
            pathname !== '/' && (
                <header className="header flex-column container">
                    <h1>E-learning</h1>
                    <ul className="flex-column">
                    {
                        pathname === '/admin' &&
                        (<>
                        <li onClick={()=>pageChange('user')}>Add User</li>
                        <li onClick={()=>pageChange('course')}>Add Course</li>
                        <li onClick={()=>pageChange('assign')}>Assign Course</li>
                        </>)
                    }
                    {
                        pathname === '/instructor' &&
                        (<>
                        <li onClick={()=>pageChange('students')}>Students</li>
                        <li onClick={()=>pageChange('assignment')}>Add Assignment</li>
                        <li onClick={()=>pageChange('announcement')}>Add Announcement</li>
                        </>)
                    }
                    {
                        pathname === '/student' &&
                        (<>
                        <li onClick={()=>pageChange('courses')}>Courses</li>
                        <li onClick={()=>pageChange('assignments')}>Assignments</li>
                        <li onClick={()=>pageChange('announcements')}>Announcements</li>
                        </>)
                    
                    }
                    </ul>
                </header>
            )
        }
        </>
    );
}

export default Navigator;