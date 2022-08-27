import { useState } from "react";

const Contact = () => {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${username}, Email: ${email}, Message: ${message}`);
  }

  return (
    <>
      {/* Contact Page Content Section Start */}
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h3>Contact Me</h3>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="form-section px-5">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" value={username} onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="messages" class="form-label">Message</label>
                  <textarea class="form-control" id="messages" value={message} onChange={(e) => setMsg(e.target.value)} rows="3" placeholder="Write something messages..."></textarea>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact Page Content Section End */}
    </>
  );
};

export default Contact;