import React from "react";
import Nav from "../../Component/Nav/Nav.js";
import "./Home.css"
import myImage from "../../Component/image/myimage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../Component/Footer/Footer.js";

import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { MyImage } from 'path-to-your-image-component'; // Import your image component

// Styled components for better readability
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  text-align: center;
`;

const MyPhoto = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 10%;
`;

const HeaderTitle = styled.h3`
  margin: 10px 0;
`;

const AboutMe = styled.strong`
  display: block;
  font-size: 1.2em;
`;

const SocialButton = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
  }
`;

const AboutParagraph = styled.p`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
//   margin-top: 20px;
`;

const WhatIDo = styled.div`
//   margin-top: 20px;
  text-align: center;
  font-size: 1.2em;
`;

const WhatIDoText = styled.p`
  font-weight: bold;
`;

const WhatIDoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
//   margin-top: 20px;
  font-size: 1.2em;
`;

const WhatIDoItem = styled.div`
  width: 45%;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

// Rest of your components...

function Home() {
  return (
    <>
      <Nav />
      <HomeContainer>
        <AboutContainer>
          <HeaderContainer>
            <MyPhoto src={myImage} alt="Isah Jacob" />
            <HeaderTitle>
              <strong>Jacob</strong>
            </HeaderTitle>
            <div>
              <AboutMe>FullStack Engineer</AboutMe>
            </div>
            <SocialButton>
              <a href="https://www.linkedin.com/in/isahjacob" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>

              <a href="https://twitter.com/_jayky" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>

              <a href="https://www.github.com/enecode" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

              <a href="https://www.youtube.com/@jacob_Isah" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </SocialButton>
            <AboutParagraph>
                I am an innovative software engineer committed to pushing the limits of technology to provide brilliant results for businesses of all sizes. Beyond my work, I'm similarly committed to helping other professionals and tech enthusiasts along their paths by sharing my expertise through technical writing, lesson development, and interesting YouTube material.
            </AboutParagraph>
            <WhatIDo>
              <WhatIDoText>What I do</WhatIDoText>
            </WhatIDo>
            <WhatIDoContainer>
              <WhatIDoItem>
                <Title>Frontend Development</Title>
                <Description> 
                    As a developer, I find myself most captivated by the power and flexibility of React.js. I'm always eager to dive into new projects that leverage React.js and discover innovative ways to create fast, scalable, and user-friendly applications.
                </Description>
              </WhatIDoItem>
              {/* ... Other What I Do items */}
              <WhatIDoItem>
                <Title>Backend Development</Title>
                <Description> 
                    I'm also a big fan of Django and Django Rest Frameworks and the many possibilities it offers for backend development. I'm always excited to learn about new Python frameworks and libraries that can help me build better applications and scalable applications.
                </Description>
              </WhatIDoItem>

              <WhatIDoItem>
                <Title>Technical Writing</Title>
                <Description> 
                    I'm a technical writer with a passion for sharing my knowledge with others. I'm always looking for new opportunities to write about the latest technologies and share my expertise with other developers.
                </Description>
              </WhatIDoItem>

              <WhatIDoItem>
                <Title>Video Tutorials</Title>
                <Description> 
                    I'm also a teacher at heart and love creating video tutorials that help other developers learn new skills. I'm always looking for new opportunities to create video tutorials that help other developers learn new skills.
                </Description>
              </WhatIDoItem>

              <WhatIDoItem>
                <Title>Technical Mentor</Title>
                <Description> 
                    I'm a technical writer with a passion for sharing my knowledge with others. I'm always looking for new opportunities to write about the latest technologies and share my expertise with other developers. 
                </Description>
              </WhatIDoItem>

            </WhatIDoContainer>
          </HeaderContainer>
        </AboutContainer>
      </HomeContainer>
      <hr />
      <Footer />
    </>
  );
}

export default Home;
