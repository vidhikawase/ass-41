import "./Studentcard.css"
import MicOn from "./img/micon.png"
import Micoff from "./img/micon.png"


function Studentcard({StudentName , StudentImage ,MicState}) {
  return (
    <div className="Studentcard">
        <img src={MicState? MicOn : Micoff} className="student-mic" />
        <img src={StudentImage} className="student-img" />
        <span className="student-name-text"> {StudentName}</span>
    </div>
  )
}

export default Studentcard