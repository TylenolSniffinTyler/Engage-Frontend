import StudentReportPage from "./individualStudentRep";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
const PreStudentEvents = ({student}) => {
    const [data, setData ] = useState(null)
    useEffect(()=>{
        fetch(`/api/MERN/Events/List/${student.eventsAttended.join(".")}`).then(e=>{return e.json()})
        .then(data => {
            setData(data)
            console.log(data)}
            )
    }, [])
    console.log(student)
    return ( <div>
         { data && <StudentReportPage student={student} activities={data}/> }  
        </div>
        );
}
 
export default PreStudentEvents;