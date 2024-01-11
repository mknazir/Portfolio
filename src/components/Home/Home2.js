import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FaRegHandPointRight } from "react-icons/fa";

function Home2() {
  return (
    <div className='workexp'>
      <h1 className="project-heading">Where I’ve <span className='purple'>Worked</span></h1>
      <Tab.Container defaultActiveKey="first">
        <Row className="workTab">
          <Col sm={3} className='tabListSection'>
            <Nav className="flex-column tabList">
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="first" className='tabItem'>
                  10xOkr (SDE-I)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="second" className='tabItem'>
                  10xOkr (Intern)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='tabContent'>
                <Nav.Link eventKey="third" className='tabItem'>
                  UrDoer
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className='tabContentSection'>
            <Tab.Content>
              <Tab.Pane className='tabContent' eventKey="first">
                <h2>Software Engineer 1 <span className='purple'>@10xOkr</span></h2>
                <h3>June 2023 - Present</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                    <FaRegHandPointRight/>Successfully built products from initial development to enterprise-ready status while focusing on rendering optimization.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Designed and executed a comprehensive Demo OKR framework, showcasing all product functionalities to enhance user understanding and drive product adoption, resulting in a 40% increase in user engagement and a 25% decrease in user onboarding time.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Develop and Modify several APIs such as Role-Based Access, Filter Goals, and Check-in History.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Major Bug Fixes in both UI and Backend, which significantly enhance the product’s stability, user experience, and overall performance.
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className='tabContent' eventKey="second">
                <h2>Front End Developer Intern <span className='purple'>@10xOkr</span></h2>
                <h3>Jan 2023 - May 2023</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Implementing an iterative process for UI enhancements, actively seeking to improve the user interface by 40%
                    through continuous feedback and adjustments
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Implemented and streamlined a performance review system, reducing review cycle time by 50% and improving
                    employee satisfaction by 25%.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Seamlessly integrated the frontend with APIs, significantly amplifying the platform’s functionality.
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className='tabContent' eventKey="third">
                <h2>Freelancer <span className='purple'>@UrDoer (formerly TutorPoint)</span></h2>
                <h3>Jan 2022 - Present</h3>
                <div className='Workdesc'>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Completed 200+ projects in Web Development, Database Management, Wordpress, and solved complex DSA
                    problems.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Maintained a strong 4.3 out of 5 rating, reflecting consistent project excellence and client satisfaction.
                  </div>
                  <div className='bulletPoints'>
                  <FaRegHandPointRight/>Proven ability to adapt to diverse project environments and consistently meet or exceed client expectations.
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Home2;