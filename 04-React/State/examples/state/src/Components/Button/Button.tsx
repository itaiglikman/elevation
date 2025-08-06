import "./Button.css";

export function Button() {

    const handleBtnHover=()=>{
        console.log('i was hovered');
    }

    return (
        <div className="Button">

			<button onMouseEnter={handleBtnHover}>hover me</button>

        </div>
    );
}
