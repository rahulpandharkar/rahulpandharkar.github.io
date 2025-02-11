import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for the Menu icon
import './home.css'; // Import your CSS

const Home = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Experience", "Projects", "Positions of Responsibility", "Skills", "Contact"];
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const navigate = useNavigate();

  const [showMoreDallas, setShowMoreDallas] = useState(false);
  const [showMoreTheMouldStory, setShowMoreTheMouldStory] = useState(false);
  const [showMoreScientificImpulse, setShowMoreScientificImpulse] = useState(false);
  const [showMoreMaharashtraCyber, setShowMoreMaharashtraCyber] = useState(false);
  const [showMoreKJSIT, setShowMoreKJSIT] = useState(false);

  const [showMoreBitShift, setShowMoreBitShift] = useState(false);
  const [showMoreParkEazy, setShowMoreParkEazy] = useState(false);
  const [showMoreRecall, setShowMoreRecall] = useState(false);
  const [showMoreFeedback, setShowMoreFeedback] = useState(false);
  const [showMoreEmployeeTracking, setShowMoreEmployeeTracking] = useState(false);
  const [showMoreKeylogger, setShowMoreKeylogger] = useState(false);
  const [showMorePasswordManager, setShowMorePasswordManager] = useState(false);
  const [showMoreTagWise, setShowMoreTagWise] = useState(false);
  const [showMoreUserManagement, setShowMoreUserManagement] = useState(false);
  const [showMoreRailwayChatbot, setShowMoreRailwayChatbot] = useState(false);
  const [showMoreRestful, setShowMoreRestful] = useState(false);

  const [showMoreGeneralSecretary, setShowMoreGeneralSecretary] = useState(false);
  const [showMoreHackersMeetup, setShowMoreHackersMeetup] = useState(false);
  const [showMoreIEEE, setShowMoreIEEE] = useState(false);
  const [showMoreNSS, setShowMoreNSS] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [certificateSource, setCertificateSource] = useState('');

  const handleOpenDialog = (source) => {
    setCertificateSource(source);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const frameCounts = {
    Home: 19,
    Experience: 62,
    Projects: 41,
    "Positions of Responsibility": 8,
    Skills: 63,
    Contact: 21
  };

  useEffect(() => {
    setCurrentFrame(0);
    const frameCount = frameCounts[selectedMenu];
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
    }, 250);

    return () => clearInterval(frameInterval);
  }, [selectedMenu]);

  const handleMenuItemClick = (index, menuName) => {
    setHighlightedIndex(index);
    setSelectedMenu(menuName);
    setIsMenuOpen(false); // View Less menu when item is clicked
  };

  const handleBackButtonClick = () => {
    navigate("/"); // Navigate back
  };

  const renderInfoContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return (
          <div>
            <div className="text-for-typewriter">
              I am currently pursuing a <span style={{ color: "orange" }}>Bachelor of Technology in Information Technology</span> at
              <span style={{ color: "orange" }}> KJ Somaiya Institute of Technology (KJSIT)</span> with a maintained CGPA of <span style={{ color: "orange" }}>9.66</span><br /><br />

              I am truly excited about building a career in the captivating world of
              <span style={{ color: "orange" }}> Cybersecurity</span>.<br /><br />

              Here are some of the skills I bring to the table:<br />
              <span style={{ color: "orange" }}>Building Websites</span><br />
              <span style={{ color: "orange" }}>Building Applications</span><br />
              <span style={{ color: "orange" }}>Working with APIs</span><br />
              <span style={{ color: "orange" }}>Developing IoT Projects</span><br />
              <span style={{ color: "orange" }}>Creating AI/ML Models</span><br />
              <span style={{ color: "orange" }}>Penetrating Networks</span><br />
              <span style={{ color: "orange" }}>Assessing and Analyzing Threats and Vulnerabilities</span>

              {/* View CV Button */}
              <div style={{ marginTop: '20px' }}>
                <button
                  onClick={() => handleOpenDialog('/certificates/resume.pdf')}
                  style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    fontSize: '16px',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Press Start 2P, sans-serif' // Assuming you're using the same font
                  }}
                >
                  View my CV
                </button>
              </div>
            </div>

            {/* Modal/Dialog for CV */}
            {isDialogOpen && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  width: '90%',
                  height: '80%',
                  maxWidth: '1200px',
                  maxHeight: '800px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}>
                  <button onClick={handleCloseDialog} style={{
                    position: 'absolute',
                    bottom: '20px',  // Positions the button at the bottom
                    left: '50%',  // Centers the button horizontally
                    transform: 'translateX(-50%)',  // Corrects the position to truly center the button
                    background: 'orange',
                    color: 'white',
                    fontSize: '16px',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Press Start 2P, sans-serif'  // Assuming you are using the same font
                  }}>
                    Close
                  </button>
                  <iframe
                    src={certificateSource}  // This will load the CV
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="CV Viewer"
                    style={{
                      objectFit: 'contain',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      case 'Experience':
        return (
          <div>
            <p className="text-for-typewriter">
              <div style={{ textAlign: "justify" }}>

                {/* The Mould Story Experience */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src="/icons/the_mould_story.png" alt="The Mould Story Icon" style={{ height: "30px", marginRight: "10px" }} />
                  <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>The Mould Story (Jun'24 - Aug'24)</span>
                </div>
                <span style={{ fontSize: "14px", color: "white" }}>CRM Chatbot Developer</span>
                <br />
                {showMoreTheMouldStory ? (
                  <>
                    <span style={{ fontSize: "12px", color: "white" }}>
                      Developed a CRM Chatbot for efficient Order Status Tracking through WhatsApp messages and basic FAQs.<br />
                      Conducted task-specific research to provide insights for new strategies.<br />
                      Contributed to designing Material Safety and Technical Datasheets and industrialized product labels.<br />
                      Assisted in creating content for the company’s social media accounts.
                    </span>
                    <br />
                    <a
                      href="#!"
                      onClick={() => handleOpenDialog("/certificates/Letter of Recommendation (Mould Story).pdf")}
                      style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}
                    >
                      Click here to view Certificate
                    </a>
                    <br /><br />
                    <button onClick={() => setShowMoreTheMouldStory(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreTheMouldStory(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View More
                  </button>
                )}
                <br /><br />
                {/* The Mould Story Experience */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src="/icons/dallas.png" alt="University of Texas Logo" style={{ height: "30px", marginRight: "10px" }} />
                  <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>University of Texas (Jun'23 - Jul'24)</span>
                </div>
                <span style={{ fontSize: "14px", color: "white" }}>Full Stack Developer</span>
                <br />
                {showMoreDallas ? (
                  <>
                    <span style={{ fontSize: "12px", color: "white" }}>
                      Developed a web application using React for the frontend and Python for the backend, with MongoDB as the database. <br />
                      Integrated various APIs, including Razorpay for payments, Google Maps for location services, and Firebase for enhanced data communication.
                    </span>
                    <br />
                    <a
                      href="#!"
                      onClick={() => handleOpenDialog("/certificates/Dallas LOA.pdf")}
                      style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}
                    >
                      Click here to view Certificate
                    </a>
                    <br /><br />
                    <button onClick={() => setShowMoreDallas(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreDallas(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View More
                  </button>
                )}
                <br /><br />

                {/* Scientific Impulse Experience */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src="/icons/scientific_impulse.jpeg" alt="Scientific Impulse Icon" style={{ height: "30px", marginRight: "10px" }} />
                  <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>Scientific Impulse (May'24 - Jun'24)</span>
                </div>
                <span style={{ fontSize: "14px", color: "white" }}>Researcher</span>
                <br />
                {showMoreScientificImpulse ? (
                  <>
                    <span style={{ fontSize: "12px", color: "white" }}>
                      Conducted in-depth research on various scientific topics, uncovering valuable insights.<br />
                      Structured findings into clear, well-organized documents for easy understanding.<br />
                      Actively participated in meetings and contributed to collaborative discussions.<br />
                      Interpreted research outcomes and communicated them effectively to team members.<br />
                      Collaborated with colleagues to drive innovative solutions in scientific research.
                    </span>
                    <br />
                    <a
                      href="#!"
                      onClick={() => handleOpenDialog("/certificates/scientific_impulse.pdf")}
                      style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}
                    >
                      Click here to view Certificate
                    </a>
                    <br /><br />
                    <button onClick={() => setShowMoreScientificImpulse(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreScientificImpulse(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View More
                  </button>
                )}
                <br /><br />

                {/* Maharashtra Cyber Experience */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src="/icons/maharashtra_cyber.png" alt="Maharashtra Cyber Icon" style={{ height: "30px", marginRight: "10px" }} />
                  <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>Maharashtra Cyber (Dec'23)</span>
                </div>
                <span style={{ fontSize: "14px", color: "white" }}>Open Source Intelligence Intern</span>
                <br />
                {showMoreMaharashtraCyber ? (
                  <>
                    <span style={{ fontSize: "12px", color: "white" }}>
                      Conducted investigations on cybercrimes using Open Source Intelligence techniques.<br />
                      Researched Social Engineering scams, including tactics, case studies, and psychological principles.<br />
                      Learned the fundamentals of Digital Forensics, covering tools, methodologies, and legal considerations.
                    </span>
                    <br />
                    <span style={{ fontSize: "12px", color: "orange", fontStyle: "italic" }}>No certificate :( </span>
                    <br /><br />
                    <button onClick={() => setShowMoreMaharashtraCyber(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreMaharashtraCyber(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View More
                  </button>
                )}
                <br /><br />

                {/* KJ Somaiya Experience */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src="/icons/somaiya.jpeg" alt="KJSIT Icon" style={{ height: "30px", marginRight: "10px" }} />
                  <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>KJ Somaiya Institute of Technology (Dec'22 - Jan'23)</span>
                </div>
                <span style={{ fontSize: "14px", color: "white" }}>Web Development Intern</span>
                <br />
                {showMoreKJSIT ? (
                  <>
                    <span style={{ fontSize: "12px", color: "white" }}>
                      Acquired a solid understanding of PHP scripting fundamentals.<br />
                      Mastered backend database connectivity using PHP for efficient data management.<br />
                      Gained expertise in executing database operations, such as querying and updating data.<br />
                      Explored website security protocols with PHP, emphasizing data safety.<br />
                      Designed and implemented a sophisticated Password Management System as a capstone project.
                    </span>
                    <br />
                    <a
                      href="#!"
                      onClick={() => handleOpenDialog("/certificates/kjsit.pdf")}
                      style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}
                    >
                      Click here to view Certificate
                    </a>
                    <br /><br />
                    <button onClick={() => setShowMoreKJSIT(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreKJSIT(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View More
                  </button>
                )}
              </div>
            </p>

            {/* Modal/Dialog for Certificate */}
            {isDialogOpen && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  width: '90%', // increased width
                  height: '80%', // slightly increased height
                  maxWidth: '1200px', // increased max width
                  maxHeight: '800px', // slightly increased max height
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  <button onClick={handleCloseDialog} style={{
                    position: 'absolute',
                    bottom: '20px', // Positions the button at the bottom
                    left: '50%', // Centers the button horizontally
                    transform: 'translateX(-50%)', // Corrects the position to truly center the button
                    background: 'orange',
                    color: 'white',
                    fontSize: '18px',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Press Start 2P, sans-serif' // Assuming you are using the same font
                  }}>
                    Close
                  </button>
                  <iframe
                    src={certificateSource}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Certificate Viewer"
                  />
                </div>
              </div>
            )}

          </div>
        );
      case 'Projects':
        return (
          <div className="text-for-typewriter">
            <div className="projects-container">
              {/* BitShift: The Security Professional's Toolkit */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>1. BitShift: The Security Professional's Toolkit</h3>
                {showMoreBitShift ? (
                  <>
                    <p style={{ color: "white" }}>
                      A Raspberry Pi-based penetration testing device for MITM attacks, network scanning, port detection, card cloning, social engineering, phishing, and keylogging.
                    </p>
                    <a href="https://drive.google.com/file/d/1l6lZ_Coj_7QbfuaSM3PkO8RDef5NxItb/view?usp=sharing" target="_blank" style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}>
                      Watch the Video
                    </a>
                    <br />
                    <a href="https://github.com/ojaskavathe/bitshift" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreBitShift(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreBitShift(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* ParkEazy - Smart Parking Management */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>2. ParkEazy: Smart Parking Management</h3>
                {showMoreParkEazy ? (
                  <>
                    <p style={{ color: "white" }}>
                      An Android/web app leveraging RFID and QR codes with CCTV integration for efficient parking management.
                    </p>
                    <a href="https://drive.google.com/file/d/1X-kc6gFzgjcSO5agKLQglF41HhGNJkXl/view?usp=sharing" target="_blank" style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}>
                      Watch the Video
                    </a>
                    <br />
                    <a href="https://github.com/rahulpandharkar/parkeazy" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreParkEazy(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreParkEazy(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Recall: A Tool for the Blind/Forgetful */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>3. Recall: A Tool for the Blind/Forgetful</h3>
                {showMoreRecall ? (
                  <>
                    <p style={{ color: "white" }}>
                      A Python application paired with a camera and speaker to assist visually impaired individuals or those with Alzheimer's in recognizing and recalling faces.
                    </p>
                    <a href="https://drive.google.com/file/d/1NYzGb-mnOF-J9ZmT4aa8SI3ei-FxqY50/view?usp=sharing" target="_blank" style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}>
                      Watch the Video
                    </a>
                    <br />
                    <a href="https://github.com/rahulpandharkar/recall" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreRecall(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreRecall(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Feedback: Government Review Tool */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>4. Feedback: Government Review Tool</h3>
                {showMoreFeedback ? (
                  <>
                    <p style={{ color: "white" }}>
                      Built during a 24-hour hackathon, this app integrates Gemini and Llama AI to let citizens report issues with images. AI describes the images and highlights "hotspots" for admin prioritization. It includes an AI chatbot for problem-solving.
                    </p>
                    <a href="https://github.com/rahulpandharkar/feedback" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreFeedback(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreFeedback(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Employee Attendance Tracking */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>5. Employee Attendance Tracking App</h3>
                {showMoreEmployeeTracking ? (
                  <>
                    <p style={{ color: "white" }}>
                      An Android app for supervisors to track employees' real-time locations and attendance using Open Source Maps. It sends GPS updates to admins.
                    </p>
                    <a href="https://github.com/rahulpandharkar/Employee_Tracking" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreEmployeeTracking(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreEmployeeTracking(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Keylogger: Credential Harvesting */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>6. Keylogger: Credential Harvesting</h3>
                {showMoreKeylogger ? (
                  <>
                    <p style={{ color: "white" }}>
                      A pentesting tool for capturing keystrokes and forwarding them to a server for analysis.
                    </p>
                    <a href="https://github.com/rahulpandharkar/Keylogger" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreKeylogger(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreKeylogger(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Password Manager */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>7. Password Manager</h3>
                {showMorePasswordManager ? (
                  <>
                    <p style={{ color: "white" }}>
                      A web-based tool to save and retrieve user passwords using HTML, CSS, JavaScript, PHP, and MySQL.
                    </p>
                    <a href="https://github.com/rahulpandharkar/Password_Manager" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMorePasswordManager(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMorePasswordManager(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* RestFul vs gRPC (A Research) */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>8. RestFul vs gRPC (A Research)</h3>
                {showMoreRestful ? (
                  <>
                    <p style={{ color: "white" }}>
                      This college research project compares the performance of RESTful and gRPC API calls to the IGDB API provided by Twitch, focusing on retrieving video game data. It is a very basic project for beginners to understand the difference between the RESTful and gRPC API calls and their network performance.
                    </p>
                    <br />
                    <a href="https://github.com/rahulpandharkar/api-performance-monitoring" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreRestful(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreRestful(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* TagWise: IoT-based Inventory Management */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>9. TagWise: IoT-based Inventory Management</h3>
                {showMoreTagWise ? (
                  <>
                    <p style={{ color: "white" }}>
                      A project using IoT technologies for tracking containers in the logistics and supply chain industry with RFID-based scanning.
                    </p>
                    <a href="https://drive.google.com/file/d/1YhwuCCTyVprajNhtcoUD4490ORjJngbw/view?usp=sharing" target="_blank" style={{ fontSize: "12px", color: "orange", textDecoration: "none" }}>
                      Watch the Video
                    </a>
                    <br />
                    <a href="https://github.com/rahulpandharkar/tagwise" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreTagWise(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreTagWise(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* User Management System */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>10. User Management System</h3>
                {showMoreUserManagement ? (
                  <>
                    <p style={{ color: "white" }}>
                      A simple web app using HTML, CSS, JavaScript, and PHP for effective user management.
                    </p>
                    <a href="https://github.com/rahulpandharkar/user-management-system" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreUserManagement(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreUserManagement(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>

              {/* Railway Help Chatbot */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", textAlign: "left" }}>
                <h3 style={{ color: "orange" }}>11. Railway Help Chatbot</h3>
                {showMoreRailwayChatbot ? (
                  <>
                    <p style={{ color: "white" }}>
                      An AI-powered chatbot designed to assist passengers of Indian Railways. It answers queries and sends issues to the respective departments for quick resolution.
                    </p>
                    <a href="https://github.com/rahulpandharkar/railway_assistance" target="_blank">
                      <img src="/icons/github.png" alt="GitHub" style={{ width: '40px' }} />
                    </a>
                    <br />
                    <button onClick={() => setShowMoreRailwayChatbot(false)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                      View Less
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowMoreRailwayChatbot(true)} style={{ fontSize: "12px", color: "white", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    View More
                  </button>
                )}
              </div>
            </div>
          </div>
        );


      case 'Positions of Responsibility':
        return (
          <p className="text-for-typewriter">
            <div style={{ textAlign: "justify" }}>
              {/* General Secretary Experience */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img src="/icons/sc.png" alt="General Secretary Logo" style={{ height: "50px", marginRight: "10px", backgroundColor: "white" }} />
                <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold", textAlign: "left" }}>Students' Council, KJSIT (Jan'22 - Dec'24)</span>
              </div>
              <span style={{ fontSize: "14px", color: "white" }}>General Secretary </span>
              <br />
              {showMoreGeneralSecretary ? (
                <>
                  <ul style={{ fontSize: "12px", color: "white" }}>
                    <li>Began humbly as part of the Publicity team, ascended to the esteemed position of Joint Chief Executive Officer, and ultimately assumed the mantle of being the General Secretary of my college.</li>
                    <br />
                    <li>Serving as the student representative of my university, I bore the weighty responsibility of fostering seamless communication channels between the college's management, administration, and student populace. This entailed diligently gathering feedback and ensuring the holistic satisfaction of all students.</li>
                    <br />
                    <li>Spearheaded and oversaw dynamic, cross-functional teams comprising 160+ students, orchestrating a plethora of cultural, sports, technical, and other events. With a staggering footfall exceeding 10,000 participants, I bore complete responsibility for every facet of these endeavors.</li>
                    <br />
                    <li>Successfully brokered partnerships with an impressive array of 100+ brands, fostering robust industrial engagements for the college's sports, cultural, and technical festivals.</li>
                    <br />
                    <li>Previously, as a pivotal member of the publicity team, I orchestrated compelling campaigns that drew 5,000+ individuals to participate in our sports, cultural, and technical festivals.</li>
                    <br />
                    <li>During my tenure as Joint Chief Executive Officer, I assumed the crucial role of overseeing the comprehensive security arrangements for our sports and cultural festivals, ensuring the safety of the 10,000-strong crowd. Additionally, I meticulously documented the entirety of our activities and events, presenting them for administrative review, and meticulously orchestrated the flawless execution of each event under our purview.</li>
                    <br />
                  </ul>
                  <button onClick={() => setShowMoreGeneralSecretary(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View Less
                  </button>
                </>
              ) : (
                <button onClick={() => setShowMoreGeneralSecretary(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                  View More
                </button>
              )}
              <br /><br />

              {/* The Hackers Meetup Experience */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img src="/icons/thm.png" alt="The Hackers Meetup Logo" style={{ height: "40px", marginRight: "10px", backgroundColor: "white" }} />
                <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>The Hackers Meetup (Jul'23 - Nov'24)</span>
              </div>
              <span style={{ fontSize: "14px", color: "white" }}>Core Team</span>
              <br />
              {showMoreHackersMeetup ? (
                <>
                  <ul style={{ fontSize: "12px", color: "white" }}>
                    <li>Part of the Core Team handling the Mumbai Chapter of the community.</li>
                    <br />
                    <li>Actively involved in planning and executing monthly conferences, uniting Cybersecurity enthusiasts from various walks of life.</li>
                    <br />
                    <li>Took charge of session introductions and conclusions, incorporating interactive elements to engage the audience effectively.</li>
                    <br />
                    <li>Managed social media platforms to maintain community presence and spread awareness efficiently.</li>
                    <br />
                    <li>Created engaging reels and video content, summarizing sessions to increase outreach and awareness on Instagram.</li>
                    <br />
                    <li>Engaged in marketing efforts to secure sponsorships and collaborations, enhancing the conferences' visibility and impact.</li>
                    <br />
                  </ul>
                  <button onClick={() => setShowMoreHackersMeetup(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View Less
                  </button>
                </>
              ) : (
                <button onClick={() => setShowMoreHackersMeetup(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                  View More
                </button>
              )}
              <br /><br />

              {/* IEEE Students Chapter Experience */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img src="/icons/ieee_kjsit.png" alt="IEEE Logo" style={{ height: "50px", marginRight: "10px" }} />
                <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>IEEE KJSIT (Sep'23 - May'24)</span>
              </div>
              <span style={{ fontSize: "14px", color: "white" }}>Joint Chief Executive Officer</span>
              <br />
              {showMoreIEEE ? (
                <>
                  <ul style={{ fontSize: "12px", color: "white" }}>
                    <li>Played a key role in organizing a 10+ event technical festival at my college, contributing to planning and execution efforts.</li>
                    <br />
                    <li>Documented the entire tenure of the body's activities, ensuring transparency and accountability within the team.</li>
                    <br />
                    <li>Led the publicity team to raise awareness and increase participation in the events, contributing to the success of the festival.</li>
                    <br />
                    <li>Collaborated with multiple brands as part of the core organizing team to secure sponsorships for the technical festival, assisting in marketing efforts and deal negotiations.</li>
                    <br />
                  </ul>
                  <button onClick={() => setShowMoreIEEE(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View Less
                  </button>
                </>
              ) : (
                <button onClick={() => setShowMoreIEEE(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                  View More
                </button>
              )}
              <br /><br />

              {/* NSS KJSIEIT Experience */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img src="/icons/nss.png" alt="NSS Logo" style={{ height: "50px", marginRight: "10px" }} />
                <span style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}>NSS KJSIEIT (Jul'22 - Jan'23)</span>
              </div>
              <span style={{ fontSize: "14px", color: "white" }}>Member</span>
              <br />
              {showMoreNSS ? (
                <>
                  <ul style={{ fontSize: "12px", color: "white" }}>
                    <li>I actively participated in a variety of impactful initiatives aimed at community betterment. This included organizing beach cleanups to preserve our coastal ecosystems, spearheading charity events to support local orphanages, and contributing to dog feeding campaigns to ensure the welfare of our furry friends.</li>
                    <br />
                    <li>Additionally, I proudly took part in the "Har Ghar Tiranga" campaign, as released by Prime Minister Modi, advocating for the display of our national flag throughout my college.</li>
                    <br />
                    <li>Through these endeavors, I embraced the ethos of service and collaborated with fellow volunteers to create meaningful change within our society.</li>
                    <br />
                    <li>This experience has strengthened my commitment to making a positive difference and instilled in me the value of collective action in driving social impact.</li>
                    <br />
                  </ul>
                  <button onClick={() => setShowMoreNSS(false)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                    View Less
                  </button>
                </>
              ) : (
                <button onClick={() => setShowMoreNSS(true)} style={{ fontSize: "12px", color: "orange", background: "none", border: "none", cursor: "pointer" }}>
                  View More
                </button>
              )}
            </div>
          </p>
        );
      case 'Skills':
        return (
          <div className="text-for-typewriter">
            <div className="info-container">
              <p className="text-for-typewriter">I only know this much :(</p>

              {/* Security Technologies */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Security</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/-Kali%20Linux-%23557C94?style=for-the-badge&logo=kalilinux&logoColor=black" alt="Kali Linux" />
                <img src="https://img.shields.io/badge/Metasploit-659AD2?style=for-the-badge&logo=metasploit&logoColor=white" alt="Metasploit" />
                <img src="https://img.shields.io/badge/nmap-%23FF6600.svg?style=for-the-badge&logo=nmap&logoColor=white" alt="nmap" />
                <img src="https://img.shields.io/badge/wireshark-%2380D9F7.svg?style=for-the-badge&logo=wireshark&logoColor=white" alt="Wireshark" />
                <img src="https://img.shields.io/badge/Burp%20Suite-%23660066.svg?style=for-the-badge&logo=burp&logoColor=white" alt="Burp Suite" />
                <img src="https://img.shields.io/badge/Nessus-%2385D16C.svg?style=for-the-badge&logo=nessus&logoColor=white" alt="Nessus" />
                <img src="https://img.shields.io/badge/John%20the%20Ripper-%23B2FF00.svg?style=for-the-badge&logo=john&logoColor=white" alt="John the Ripper" />
                <img src="https://img.shields.io/badge/Aircrack--ng-%231F68A6.svg?style=for-the-badge&logo=aircrack-ng&logoColor=white" alt="Aircrack-ng" />
                <img src="https://img.shields.io/badge/SETToolKit-%23F39C12.svg?style=for-the-badge&logo=python&logoColor=white" alt="SET ToolKit" />
                <img src="https://img.shields.io/badge/OWASP%20Top%2010-%239B1C31.svg?style=for-the-badge&logo=owasp&logoColor=white" alt="OWASP Top 10" />
                <img src="https://img.shields.io/badge/MITRE%20ATT%26CK-%230052A3.svg?style=for-the-badge&logo=mitre&logoColor=white" alt="MITRE ATT&CK Framework" />
              </div>


              {/* Frontend Technologies */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Frontend</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React" />
                <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
                <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
              </div>

              {/* Backend Technologies */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Backend</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
                <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
              </div>

              {/* Database Technologies */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Database</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                <img src="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />
              </div>

              {/* Cloud Technologies */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Cloud</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
                <img src="https://img.shields.io/badge/Openstack-%23f01742.svg?style=for-the-badge&logo=openstack&logoColor=white" alt="OpenStack" />
              </div>

              {/* Dev Tools */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Dev Tools</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
                <img src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
                <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=white" alt="Webpack" />
              </div>

              {/* Machine Learning */}
              <h4 style={{ color: "orange", textAlign: "left" }}>Machine Learning</h4>
              <div className="skills-container" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="scikit-learn" />
                <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib" />
                <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
              </div>
            </div>
          </div>
        );
      case 'Contact':
        return (
          <div className="text-for-typewriter">
            <div className="info-container">
              <div className="contact-icons">
                <a href="mailto:rahulpandharkar@hotmail.com" className="contact-icon" target="_blank" rel="noopener noreferrer">
                  <i className="far fa-envelope fa-3x"></i>
                  <span>Mail Me! (Perhaps an opportunity?)</span>
                </a>
                <a href="https://www.linkedin.com/in/rahul-pandharkar" className="contact-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-3x"></i>
                  <span>Visit only if you're gonna recruit me :)</span>
                </a>
                <a href="https://github.com/rahulpandharkar" className="contact-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github fa-3x"></i>
                  <span>Care to see my projects?</span>
                </a>
                <a href="https://www.instagram.com/rahul.pandharkar" className="contact-icon" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-3x"></i>
                  <span>There's no point, I'm socially dead :(</span>
                </a>
              </div>
            </div>
          </div>
        );

    }
  };

  return (
    <div className="everything">
      <div className="home-container">
        <button onClick={handleBackButtonClick} className="back-button">
          Back
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: window.innerWidth <= 1060 ? 'block' : 'none' }} // Show only on small screens
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Menu Ribbon (only visible on larger screens) */}
        <div className={`menu-ribbon ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${index === highlightedIndex ? "highlighted" : ""}`}
              onClick={() => handleMenuItemClick(index, item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="main-content">
          {/* Animation Container */}
          <div className="animation-container">
            <img
              src={`/animations/${selectedMenu}/frame_${currentFrame}.png`}
              alt={`Frame ${currentFrame}`}
              className="animation-frame"
            />
            {/* Display selected menu item name below the animation frame */}
            <div className="selected-menu-text">
              {selectedMenu.toUpperCase()}
            </div>
          </div>

          {/* Information Container */}
          <div className="info-container">
            {renderInfoContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;