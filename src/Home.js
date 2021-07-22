import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [word, setWord] = useState("adrian");
    const [age, setAge] = useState(13);

    const [blogs, setBlogs] = useState([
        {'id': 1,'title': 'My new website', 'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'author': 'adrian'},
        {'id': 2,'title': 'Welcome party!', 'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'author': 'Karim'},
        {'id': 3,'title': 'Web dev top tips', 'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'author': 'James'}
    ]);

    function deleteBlog(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Use effect ran");
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" deleteBlog={deleteBlog} />
        </div>
    );
}
export default Home;