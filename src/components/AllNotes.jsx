import "./AllNotes.css"

const AllNotes = () => {
    const localStorageKeys = Object.keys(localStorage);
    const input_keys = localStorageKeys.filter(Number);

    return (<div>
        <h3>همه نوشته‌ها</h3>

        {input_keys.map((input_key)=>(
            <div key={input_key}>
                <p className="input-memory">
                {localStorage[input_key]}
                </p>
                
                <hr />
            </div>
        ))}
    </div>)
}

export default AllNotes;