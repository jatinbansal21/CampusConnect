import "./collaborate.css";

const Collaborate = () => {
  const handlelogin = (e) => {
    window.location.href =
      "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize?client_id=b9bb88de-2a97-4488-848b-b33d23d1c014&scope=user.read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fumiam-kriti24.onrender.com%2Fredirect&client-request-id=7bcd925d-b442-414b-aa01-a4a503e169ed&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=2.6.2&x-client-OS=linux&x-client-CPU=x64&client_info=1";
  };

  return (
    <>
      <div className="collaborate-hm">
        <div>
          <p className="heading-hm">
            Collaberate And Discuss your project with campus janta
          </p>
          <p className="col_text-hm">
            Engage in meaningful discussions and collaborative exchanges with
            fellow students to elevate your projects and ideas.
          </p>
          <button className="page_btn-hm" onClick={handlelogin}>
            Start for Free
          </button>
        </div>
        <img
          src={require("./images/Laptop mockup.png")}
          alt="rectangle"
          className="laptop_img-hm"
        ></img>
        <img
          src={require("./images/Rectangle2.png")}
          alt="rectangle"
          className="black_img-hm"
        ></img>
        <img
          src={require("./images/Rectangle3.png")}
          alt="rectangle"
          className="yellow_img-hm"
        ></img>
      </div>
      <div className="aboutus-hm right-hm">
        <img
          src={require("./images/Rectangle5.png")}
          alt="rectangle"
          className="about_img-hm"
        ></img>
        <img
          src={require("./images/Rectangle6.png")}
          alt="rectangle"
          className="outline_img-hm"
        ></img>
        <div className="content-hm">
          <p className="heading-hm">About Us</p>
          <p className="text-hm">
            Introducing "Campus Collaborate" – a dynamic web and mobile app
            empowering students to showcase projects, connect with peers, and
            foster collaboration. With features like profile creation, project
            portfolios, rating systems, and a helpful ask-for-assistance
            feature, it's the ultimate platform for students to shine and grow
            together. Plus, our innovative Anti-Spam Engine ensures a safe and
            vibrant community for all users. Join us and unleash your potential!
          </p>
        </div>
      </div>
      <div className="feature1-hm left-hm">
        <div className="content-hm">
          <p className="heading-hm">Project Showcase</p>
          <p className="text-hm">
            Students can post detailed information about their projects,
            including descriptions, objectives, technologies used, and outcomes,
            with multimedia support for images, videos, and documents.
          </p>
          <button className="page_btn-hm">Learn More</button>
        </div>
        <div className="im-hm">
          <img
            src="/images/Rectangle17.png"
            alt="rectangle"
            className="white_box-hm"
          ></img>
          <img
            src="/images/Rectangle7.png"
            alt="rectangle"
            className="black_box-hm"
          ></img>
        </div>
      </div>
      <div className="feature2-hm right-hm">
        <img
          src="/images/Rectangle8.png"
          alt="rectangle"
          className="l_black_box-hm"
        ></img>
        <img
          src="/images/Rectangle17.png"
          alt="rectangle"
          className="l_white_box-hm"
        ></img>
        <div className="content-hm">
          <p className="heading-hm">Project Creation</p>
          <p className="text-hm">
            Users can create profiles showcasing their skills and projects,
            including a portfolio section to highlight their work.
          </p>
          <button className="page_btn-hm">Learn More</button>
        </div>
      </div>
      <div className="feature1-hm left-hm">
        <div className="content-hm">
          <p className="heading-hm">Rating and Feedback System</p>
          <p className="text-hm">
            A rating and feedback system for projects and collaborations allows
            students to build credibility and receive constructive feedback from
            their peers.
          </p>
          <button className="page_btn-hm">Learn More</button>
        </div>
        <div className="im-hm">
          <img
            src="/images/Rectangle17.png"
            alt="rectangle"
            className="white_box-hm"
          ></img>
          <img
            src="/images/Rectangle7.png"
            alt="rectangle"
            className="black_box-hm"
          ></img>
        </div>
      </div>
      <div className="feature2-hm right-hm">
        <img
          src="/images/Rectangle8.png"
          alt="rectangle"
          className="l_black_box-hm"
        ></img>
        <img
          src="/images/Rectangle17.png"
          alt="rectangle"
          className="l_white_box-hm"
        ></img>
        <div className="content-hm">
          <p className="heading-hm">Ask-For-Help</p>
          <p className="text-hm">
            Students can use the platform to seek solutions, ideas for new
            projects, and collaborate with others to enhance their learning
            experience.
          </p>
          <button className="page_btn-hm">Learn More</button>
        </div>
      </div>
      <div className="feature2-hm right-hm">
        <img
          src="/images/Rectangle8.png"
          alt="rectangle"
          className="l_black_box-hm"
        ></img>
        <img
          src="/images/Rectangle17.png"
          alt="rectangle"
          className="l_white_box-hm"
        ></img>
        <div className="content-hm">
          <p className="heading-hm">Course Review</p>
          <p className="text-hm">
            A dedicated section for course reviews enables students to share
            their feedback on courses they have taken, making it easier for
            others to find quality courses.
          </p>
          <button className="page_btn-hm">Learn More</button>
        </div>
      </div>
      <div className="contact_us-hm">
        <img
          src="/images/Rectangle9.png"
          alt="rectangle"
          className="rec1-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec2-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec3-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec4-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec5-hm"
        ></img>
        <img
          src="/images/Rectangle18.png"
          alt="rectangle"
          className="rec6-hm"
        ></img>
        <img
          src="/images/Rectangle1.png"
          alt="rectangle"
          className="rec7-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec8-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec9-hm"
        ></img>
        <img
          src="/images/Rectangle13.png"
          alt="rectangle"
          className="rec10-hm"
        ></img>
        <p className="get_help-hm">Get Help</p>
        <p className="get_text-hm">
          Get expert assistance and guidance from our dedicated support team,
          available round-the-clock to address all your queries and provide
          personalized solutions.
        </p>
        <button className="page_btn-hm cont_btn-hm">Contact us</button>
      </div>
      {/* <div className="footer-hm">
        <img src="/images/Group21.png" alt="logo" className="logo-hm"></img>
        <ul className="nav-links-hm">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
        </ul>
      </div> */}
    </>
  );
};

export default Collaborate;
