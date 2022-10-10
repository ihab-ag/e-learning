
const CourseAssigner=({name})=>{

return(
    <>
        <form className="flex-row" onSubmit={(e)=> e.preventDefault()}>
            <p>{name}</p>
            <div>
                <select name="id" placeholder="asignee">
                    <option value="test">test1</option>
                    <option value="test">test2</option>
                </select>
                <input type="submit" value="assign" />
                </div>
        </form>
    </>
)
}

export default CourseAssigner;