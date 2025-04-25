import React from 'react';

const SetUp = () => {
    return (
        <div>
            <h3
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '20px',
                    margin: '20px',
                    paddingBottom: '20px',
                    fontSize: '25px',
                    fontFamily: 'Times, serif',
                    fontWeight: 'bold',
                    whiteSpace: 'wrap',
                }}
            >
                Setup &amp; Test Video
            </h3>

            <div
                style={{
                    position: 'absolute',
                    top: '120px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
                    textWrap:'wrap'
                }}
            >
                <b>Tips</b>
                <ul>
                    <li>
                        <b>Equipment can be easy.</b>
                        <br />
                        You don’t need to buy fancy equipment. Most smartphone cameras can capture video in HD, and you can record audio on another phone or external microphone.
                    </li>
                    <li>
                        <b>Students need to hear you.</b>
                        <br />
                        A good microphone is the most important piece of equipment you will choose. There are a lot of affordable options. Make sure it’s correctly plugged in and 6-12 inches (15-30 cm) from you.
                    </li>
                    <li>
                        <b>Make a studio.</b>
                        <br />
                        Clean up your background and arrange props. Almost any small space can be transformed with a backdrop made of colored paper or an ironed bed sheet.
                    </li>
                    <li>
                        <b>Light the scene and your face.</b>
                        <br />
                        Turn off overhead lights. Experiment with three-point lighting by placing two lamps in front of you and one behind aimed at the background.
                    </li>
                    <li>
                        <b>Reduce noise and echo.</b>
                        <br />
                        Turn off fans or air vents and record at a time when it’s quiet. Place acoustic foam or blankets on the walls and bring in rugs or furniture to dampen echo.
                    </li>
                    <li>
                        <b>Be creative.</b>
                        <br />
                        Students won’t see behind the scenes. No one will know if you’re surrounded by pillows for soundproofing...unless you tell other instructors in the community!
                    </li>
                </ul>
            </div>

            <br/>

            <div
                style={{
                    position: 'absolute',
                    top: '600px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
           
                }}
            >
                <b>Requirements</b>
                <ul style={{ listStyleType: 'disc' , margin:'20px'}}>
                    <li>Film and export in HD to create videos of at least 720p, or 1080p if possible</li>
                    <li>Audio should come out of both the left and right channels and be synced to your video</li>
                    <li>Audio should be free of echo and background noise so as not to be distracting to students</li>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '750px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
                }}
            >
                <b>Resources</b>
                <ul>
                    <b>Make a home studio on a budget</b>

                    <li>
                        <a href="link" style={{ color: 'rgb(164, 53, 240)' }}>
                            Teaching Center: Guide to equipment
                        </a>
                    </li>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '830px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
                }}
            >
                <b>Udemy Trust & Safety</b>
                <ul>
                    <li>
                        <a href="link" style={{ color: 'rgb(164, 53, 240)' }}>
                            Our policies for instructors and students
                        </a>
                    </li>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '885px',
                    left: '20px',
                    fontFamily: 'Times, serif',
                    textAlign: 'left',
                    padding: '20px',
                }}
            >
                <b>Join the community</b>
                <ul>
                    <li>
                        <a href="link" style={{ color: 'rgb(164, 53, 240)' }}>
                            A place to talk with other instructors
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SetUp;