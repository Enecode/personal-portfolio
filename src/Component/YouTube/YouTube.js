import React from 'react';
import styled from '@emotion/styled';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Nav from "../../Component/Nav/Nav.js";

// import { Card, CardContent, Typography, Button } from '@mui/material';
// import Nav from "../../Component/Nav/Nav.js";

// Styled components for better readability
const YoutubeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin: auto;
`;

const ComponentTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const VideoCard = styled(Card)`
  width: 300px;
  margin: 20px;
`;

const VideoTitle = styled(Typography)`
  // font-size: 1.2em;
  margin-bottom: 10px;
  font-family: Switzer,sans-serif;
  // font-weight: 700;
  color: #6e97ff;
  // letter-spacing: .02em;
  // font-size: 2rem;
  font-weight: bold;
`;

const VideoDescription = styled(Typography)`
  font-size: 1em;
  margin-bottom: 15px;
  justify-content: left;
  text-align: left;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled(Button)`
  text-transform: none;
`;

// Sample data
const videos = [
  {
    title: 'Dictionary in Python',
    description: 'In this video, I cover everything you need to know about dictionaries in Python.',
    youtubeLink: 'https://youtu.be/Kyi1YhC1pB8',
    articleLink: 'https://youtu.be/Kyi1YhC1pB8',
  },

  {
    title: 'Tuple in python',
    description: 'In this video, you will learn everything you need to know about tuple in python',
    youtubeLink: 'https://youtu.be/cMnCB8RjrO8',
    articleLink: 'https://youtu.be/cMnCB8RjrO8',
  },

  {
    title: 'Loop in python',
    description: 'In this video, we dive deep into the fundamental concepts of loop structures in Python.',
    youtubeLink: 'https://youtu.be/hLZpaM8eLHI',
    articleLink: 'https://youtu.be/hLZpaM8eLHI',
  },

//   {
//     title: 'List in python',
//     description: 'In this video, we dive deep into one of the fundamental data structures in Python. Whether you are a beginner looking to learn Python or an experienced developer aiming to refresh your knowledge, this comprehensive guide will help you understand Python lists from the ground up.',
//     youtubeLink: 'https://youtu.be/HjLi1SjfIzI',
//     articleLink: 'https://youtu.be/HjLi1SjfIzI',
//   },

//   {
//     title: 'List in python',
//     description: 'In this video, we dive deep into one of the fundamental data structures in Python. Whether you are a beginner looking to learn Python or an experienced developer aiming to refresh your knowledge, this comprehensive guide will help you understand Python lists from the ground up.',
//     youtubeLink: 'https://youtu.be/HjLi1SjfIzI',
//     articleLink: 'https://youtu.be/HjLi1SjfIzI',
//   },

  
  // Add more videos as needed
];

const YoutubeComponent = () => {
  return (
    <>
      <Nav />
      <ComponentTitle>YouTube Videos</ComponentTitle>
      <YoutubeContainer>
        
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))}

        {/* {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))}


        {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))} */}


        {/* {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))}


        {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))}


        {videos.map((video, index) => (
          <VideoCard key={index}>
            <CardContent>
              <VideoTitle variant="h6">{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <LinksContainer>
                <LinkButton
                  variant="contained"
                  color="primary"
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href={video.articleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Technical Article
                </LinkButton>
              </LinksContainer>
            </CardContent>            
          </VideoCard>
        ))} */}
      </YoutubeContainer>
    </>
  );
};

export default YoutubeComponent;













// import React from 'react';
// import './YouTube.css'; 
// import Nav from '../../Component/Nav/Nav.js';

// function YouTube() {
//     return (
//         <div className="YouTube-container">
//             <Nav />
//             <h2 className="youtube-title">YouTube</h2>
//             <div className="content-container">
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube.com/embed/d6oyj9yrnOs?si=M6coFkWZe_LOJPtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank" ></iframe>
                    
//                 </div>
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube.com/embed/ppHxpOF4voA?si=L2uViywnnMQF2zeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube.com/embed/FEGTzWQNEoE?si=LG8ryfHT0j1a6kMP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AeFPg4MDgJQ?si=ymGNZffpr6RtMwh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sbP-Uj0z-VA?si=fVgHmGEbTFijf4iH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>
                
//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JFOm83W0nTc?si=EuYbrd9dyqF-6zKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>

//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8EJ7iQlRcKc?si=1Cl6QtM-VIKArAbx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>

//                 <div className="youtube-video">
//                     <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hLZpaM8eLHI?si=j2lbNhSsknjWnpbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
//                 </div>
//             </div>
//         </div>
//     );
    
// }

// export default YouTube;