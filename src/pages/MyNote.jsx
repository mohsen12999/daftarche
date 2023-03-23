import "./MyNote.css"

const MyNote = () => {
    const input_id = Date.now();

    const saveInput = (value) =>{
        localStorage.setItem(input_id, value)
    }

    return (
        <div>
            <textarea
                className="my-input"
                onChange={(e) => saveInput(e.target.value)}
                placeholder="چی توی ذهنت هست؟">
            </textarea>
        </div>
    )
};

export default MyNote;