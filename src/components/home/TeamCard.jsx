import React from 'react'
import Image from 'next/image'
import team1 from '@/images/team1.png'

const TeamCard = () => {
  return (
    <div className="team-card">
        <div className="team-img">
            <Image src={team1} alt="Team Member 1" />
        </div>
        <div className="team-info">
            <h3>Ceo & Boss</h3>
            <p className="sec-para">
                Bachelor in Public Administartion, Graduate School of Management, Saint Petersburg State University Bachelor in Public Administartion, Graduate School of Management, Saint Petersburg State University
            </p>
        </div>
    </div>
)
}

export default TeamCard