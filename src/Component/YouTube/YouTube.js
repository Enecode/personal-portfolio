import React from 'react';
import './YouTube.css'; 
import Nav from '../../Component/Nav/Nav.js';

function YouTube() {
    return (
        <div className="YouTube-container">
            <Nav />
            <h2 className="youtube-title">YouTube</h2>
            <div className="content-container">
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d6oyj9yrnOs?si=M6coFkWZe_LOJPtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank" ></iframe>
                    
                </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ppHxpOF4voA?si=L2uViywnnMQF2zeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FEGTzWQNEoE?si=LG8ryfHT0j1a6kMP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AeFPg4MDgJQ?si=ymGNZffpr6RtMwh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sbP-Uj0z-VA?si=fVgHmGEbTFijf4iH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>
                
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JFOm83W0nTc?si=EuYbrd9dyqF-6zKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>

                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8EJ7iQlRcKc?si=1Cl6QtM-VIKArAbx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>

                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hLZpaM8eLHI?si=j2lbNhSsknjWnpbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen target="_blank"></iframe>
                </div>
            </div>
        </div>
    );
    
}

export default YouTube;