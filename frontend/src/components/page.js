import UserRegister from "./user_register";

const Page=({page})=>{
    return(
        <div className="page flex-center">
            {
                page === 'user' && (
                    <UserRegister />
                )
            }
        </div>
    );
}

export default Page;