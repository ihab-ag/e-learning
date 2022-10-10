import UserRegister from "./user_register";

const Page=({page})=>{
    return(
        <div className="page flex-column">
            {
                page === 'user' && (
                    <UserRegister />
                )
            }
        </div>
    );
}

export default Page;