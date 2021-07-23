import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h3>Sorry.</h3>
            <p>We couldn't find the specified page.</p>
            <Link to="/">Back to the home page</Link>
        </div>
    )
}

export default NotFound;