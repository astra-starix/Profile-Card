/* eslint-disable react/prop-types */
import './index.css'

function App() {

  return (
    <div className='card'>
      <Avatar/>
      <div className='data'>
        <Intro/>
        <SkillList/>
      </div>
    </div>
  )
}
function Avatar(){
    return(
        <img className='avatar' src="./img/pnj.jpg" alt="Sahil Sagar" />
    )
}
function Intro(){
  return(
    <div>
      <h1>Sahil Sagar</h1>
      <p>
      Sahil Sagar is a student of <strong>NIT KURUKSHETRA</strong> pursuing <strong>B.Tech.</strong> in the field of <strong>Electrical Engineering</strong> known for his expertise in developing user friendly web applications. Born and raised in <strong>Bihar</strong>, I has always have a passion for technology and innovation.
      </p>
    </div>
  )
}
function SkillList(){
  return(
    <div className='skill-list'>
      <Skill
      skill = 'React' emoji = '😣' bg = 'blue' />
      <Skill
      skill = 'JavaScript' emoji = '😣' bg = 'green' />
      <Skill
      skill = 'HTML' emoji = '💪' bg = 'orange' />
      <Skill
      skill = 'CSS' emoji = '😨' bg = 'red' />
      <Skill
      skill = 'C++' emoji = '😟' bg = 'yellow' />
      <Skill
      skill = 'C' emoji = '💪' bg = 'darkviolet' />
      <Skill
      skill = 'Chess' emoji = '💪' bg = 'grey' />
    </div>
  )
}
function Skill(props){
  return(
    <div className='skill' style={{background:props.bg}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

export default App
