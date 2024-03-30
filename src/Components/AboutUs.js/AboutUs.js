import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs_body">
      <div className="about_main_div">
        <div className="section">
          <div className="container">
            <div className="content-section">
              <div className="title">
                <h1>About Us</h1>
              </div>
              <div className="content">
                <h3>One Stop For all Farmers!</h3>
                <p>
                  Our Website Major Motto is to Help Farmers in a very unique
                  way. Our website consists of five major sections namely Crop
                  Suggestion section, Discussions Tab
                  <br />
                  Firstly, Crop Suggestion section the page takes inputs and
                  display the best possible crops and their full-fledged details
                  such as Season suitable for the crop, minimal investment,
                  water availability, Gross income and total profit earned.
                  This, helps the Farmers to have better understanding of
                  professional farming.
                  <br />
                  The website contains Discussion tab in which Farmers can post
                  their query and other farmers or experts might help them
                  posting solutions to their query.
                  <br />
                  <br />
                  For Better Services Farmers needs to login in to website for
                  more assistance.
                  <br />
                </p>
              </div>
            </div>
            <div className="image-section">
              <img src="./AboutUs_Images/aboutusimg.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
