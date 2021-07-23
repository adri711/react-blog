import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, pending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push("/");
        });
    }
    return (
        <div className="blog-details">
            <h2>Blog details - {id}</h2> <br />
            <p>{pending && "Loading..."}</p>
            <p>{blog && blog.body}</p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default BlogDetails;