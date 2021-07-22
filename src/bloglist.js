const BlogList = ({blogs, title, deleteBlog}) => {
    return (
        <div>
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => deleteBlog(blog.id)}>Delete blog</button>
                        <br/>
                    </div>
                ))
            }
        </div>
    )

}

export default BlogList;