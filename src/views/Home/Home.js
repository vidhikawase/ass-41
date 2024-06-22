import "./Home.css"
import "../../../src/style.css"
import Studentcard from "../../components/Studentcard/Studentcard"
import studentimg1 from "../../components/Studentcard/img/z2.jpg"
import studentimg2 from "../../components/Studentcard/img/z3.jpg"
import studentimg3 from "../../components/Studentcard/img/z4.jpg"

const Home = () => {
    return (
        <>
        <h1>Zoom App</h1>

        <div className="Student-card-container">
        <Studentcard
         StudentName= "Vidhi"
         StudentImage = {studentimg1}
         MicState={true}
         />

        <Studentcard 
        StudentName= "Prashant"
        StudentImage = {studentimg2}
        MicState={false}
        />

        <Studentcard 
        StudentName= "Shreya"
        StudentImage = {studentimg3}
        MicState={true}
        />
        </div>
        </>
    )

}

export default Home