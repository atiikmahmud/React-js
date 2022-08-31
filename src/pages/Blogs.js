import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const Posts = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (

      <div className="container">
        <div className="card">
          <div className="card-header">
            Blog Posts
          </div>
          <div className="card-body">
            <div className="row">
              {data &&
                data.posts.map((item) => {
                  return (
                    <div className="col-md-3">
                      <div class="card mb-3" style={{ height: "96%" }}>
                        <img src="https://media.istockphoto.com/photos/demo-sign-colorful-tags-picture-id472909414?k=20&m=472909414&s=612x612&w=0&h=lfJ4C6qJEAfNUkOeZgqIsJ6RtZMENS35KXavRMIXKe8=" class="card-img-top" alt="..." />
                        <div class="card-body" style={{ height: "90%" }}>
                          <h5 class="card-title" key={item.id}><Link style={{ textDecoration: "none", color: "black" }} to={"/post/" + item.id}>{item.title}</Link></h5>
                          <p class="card-text text-justify">{item.body.substring(0, 100)} <Link to={"/post/" + item.id}>more</Link></p>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>

    );
  };

  return (
    <>
      <Posts />
    </>
  );
}

export default Blog;