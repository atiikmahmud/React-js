const Blogs = () => {

  const postData = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
    { id: 4, title: "Post Four" },
    { id: 5, title: "Post Five" },
    { id: 6, title: "Post Six" },
    { id: 7, title: "Post Seven" },
    { id: 8, title: "Post Eight" },
    { id: 9, title: "Post Nine" },
    { id: 10, title: "Post Ten" },
    { id: 11, title: "Post Eleven" },
    { id: 12, title: "Post Twelve" }
  ];

  function BlogPost(props) {
    return (
      <>
        <div className="col-md-3">
          <div class="card mb-3">
            <img src="https://media.istockphoto.com/photos/demo-sign-colorful-tags-picture-id472909414?k=20&m=472909414&s=612x612&w=0&h=lfJ4C6qJEAfNUkOeZgqIsJ6RtZMENS35KXavRMIXKe8=" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read more...</a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Blog Page Content Section Start */}
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Blog Articles</h3>
          </div>
          <div className="card-body">
            <div className="row">
              {postData.map((data) => <BlogPost key={data.id} title={data.title} />)}            
          </div>
        </div>
      </div>
    </div>
      {/* Blog Page Content Section End */ }
    </>
  );
};

export default Blogs;