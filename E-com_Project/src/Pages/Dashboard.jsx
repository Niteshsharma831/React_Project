import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div>
      <div className="Carousel">
        <br /> <br /> <br />
        <Carousel>
          <Carousel.Item>
            <img
              className="p-1 d-block w-100"
              src="https://c1.wallpaperflare.com/preview/728/872/947/learn-school-student-mathematics.jpg"
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="p-1 d-block w-100"
              src="https://c0.wallpaperflare.com/preview/264/169/201/book-read-student-students.jpg"
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="p-1 d-block w-100"
              src="https://wallpapercave.com/wp/wp3194652.jpg"
              alt="Third slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="courses">
        <h2 className="text-center">
          Courses <span className="text-primary">Offers</span>
        </h2>
        <hr className="m-auto w-25" />
        <br />
        <br />
        <Row className="p-3" style={{ backgroundColor: "aqua" }}>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCHi18uXFtRb1_q7pQIVxYlwqvhVzCzZ4PQ&s"
                alt=""
                height={100}
              />
              <h4>Basic of Python</h4>
              <p>Learn the basics of programming.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow cursor-pointer bg-light">
              <img
                src="https://www.webtrills.in/control/assets/uploads/obfu_com/service_content/What-is-DBMS-and-RDBMS1.png"
                alt=""
                height={100}
              />
              <h4>Basic Of DBMS</h4>
              <p>Intermediate web development skills.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png"
                alt=""
                height={100}
              />
              <h4>Full Stack MERN</h4>
              <p>algorithms and data structures.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://stelligence.com/wp-content/uploads/2023/03/Generative-AI-1536x864.jpg"
                alt=""
                height={100}
                style={{ borderRadius: "10px" }}
              />
              <h4>Full Stack MERN</h4>
              <p> algorithms and data structures.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="p-3 gy-4" style={{ backgroundColor: "aqua" }}>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCHi18uXFtRb1_q7pQIVxYlwqvhVzCzZ4PQ&s"
                alt=""
                height={100}
              />
              <h4>Basic of Python</h4>
              <p>Learn the basics of programming.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow cursor-pointer bg-light">
              <img
                src="https://www.webtrills.in/control/assets/uploads/obfu_com/service_content/What-is-DBMS-and-RDBMS1.png"
                alt=""
                height={100}
              />
              <h4>Basic Of DBMS</h4>
              <p>Intermediate web development skills.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png"
                alt=""
                height={100}
              />
              <h4>Full Stack MERN</h4>
              <p>algorithms and data structures.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="p-3 text-center rounded shadow bg-light">
              <img
                src="https://stelligence.com/wp-content/uploads/2023/03/Generative-AI-1536x864.jpg"
                alt=""
                height={100}
                style={{ borderRadius: "10px" }}
              />
              <h4>Full Stack MERN</h4>
              <p> algorithms and data structures.</p>
              <button className="px-4 py-2 rounded shadow btn btn-primary w-100">
                <a href="" className="text-white">
                  Get More Information
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
