"use client"
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
import team1 from '@/images/team1.png';
import TeamCard from './TeamCard';

const teamMembers = [
  { eventKey: "team1", title: "Director", content: <TeamCard /> },
  { eventKey: "team2", title: "Sales Manager", content: <p>Details about Team Member 2</p> },
  { eventKey: "team3", title: "Procurement  Manager", content: <p>Details about Team Member 3</p> },
  { eventKey: "team4", title: "Site Engineer", content: <p>Details about Team Member 4</p> },
  { eventKey: "team5", title: "Head of Design", content: <p>Details about Team Member 5</p> },
  { eventKey: "team6", title: "Technical Manager", content: <p>Details about Team Member 5</p> },
  { eventKey: "team7", title: "Project Manager", content: <p>Details about Team Member 5</p> },
  { eventKey: "team8", title: "Head of Sales", content: <p>Details about Team Member 5</p> },
];

const TeamSec = () => {
  return (
    <section className="team-sec gray-bg sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 text-center">
                    <h2 className="sec-title">Our Team</h2>
                    <p className="sec-para">Your Renovation Journey Begins Here</p>
                </div>
                <div className="col-lg-12 col-12">
                    <Tabs defaultActiveKey="team1" id="team-tabs" className="team-tabs">
                        {teamMembers.map((member, index) => (
                          <Tab eventKey={member.eventKey} title={member.title} key={index}>
                            <div className="row justify-content-center">
                              <div className="col-lg-10 col-12">
                                <TeamCard />
                              </div>
                            </div>
                          </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSec