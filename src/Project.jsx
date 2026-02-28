export default function Project(props) {
    return (
        <div className="card">
            <div className="text-info">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>Instructor: {props.teacher}</p>
            </div>
            <img src={props.background} alt={props.alt} />
        </div>

    )
}