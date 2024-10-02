
import teamData from '../data/teamData';  
import './HomeScreen.css';  

const HomeScreen = () => {
    return (
        <div className="home-container">
            <h1 className="page-title">Equipo de Desarrollo</h1> 
            <div className="background-box"> 
                <div className="card-container">
                    {teamData.map((member, index) => (
                        <div key={index} className="card-item">
                            <img src={member.img} alt={member.title} className="profile-image" />
                            <h3>{member.title}</h3>
                            <p>{member.description}</p>
                            {member.link && (
                                <a 
                                    href={member.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="card-link"
                                >
                                    {member.linkText}  
                                </a>
                            )}
                            {member.linkedin && (  
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="card-link"
                                >
                                    {member.linkedinText}  
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
