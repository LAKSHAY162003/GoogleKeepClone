import e from "cors"

export function Input(props) {
    return (

        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input autocomplete="off" type="text"
                        name="heading"
                        placeholder="title"
                        value={props.inputs.heading}
                        onChange={(event) => { props.update(event) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Content</label>
                    <input autocomplete="off" name="content"
                        placeholder="content"
                        value={props.inputs.content}
                        onChange={(event) => { props.update(event) }} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Unique Id</label>
                    <input autocomplete="off" type="text"
                        name="id"
                        placeholder="id"
                        value={props.inputs.id}
                        onChange={(event) => { props.update(event) }} class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" onClick={(event) => {
                    event.preventDefault();
                    props.add();
                }} class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}


function Input1(props) {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}