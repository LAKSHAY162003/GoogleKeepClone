export function Note(props){
    return(
        <div>
            <div className="note">
                <h1>{props.heading}</h1>
                <p>{props.content}</p> 
                <button class="btn btn-danger" onClick={()=>{props.deleteItem(props.id)}}> Click to Delete !!</button> 
            </div>
        </div>
    )
}