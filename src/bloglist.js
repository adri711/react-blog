import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h4>
                            <Link to={"/blogs/" + blog.id}>
                                {blog.title}
                            </Link>
                        </h4>
                        <p>Written by {blog.author}</p>
                        <br/>
                    </div>
                ))
            }
        </div>
    )

}

export default BlogList;