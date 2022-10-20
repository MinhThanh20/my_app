
import { useState } from "react";

// const JOB_KEY = "JOB_LIST";

function Todo() {
  const [job, setJob] = useState("");
  const [jobList, setJobList] = useState([])

  const handleAddJob = () => {
   setJobList([...jobList, job])

    setJob("");
  };
  const handleDelete=(index)=>{
    jobList.splice(index,1)
    setJobList([...jobList, job])
  }
  // const {isChecked, setIsChecked} = useState(false)
  // const handleEdit=(id)=>{
  //   setJobList({...jobList, index:id})
  //   setIsChecked(!isChecked)
  //   setJob("");
    
  // }
  return (
    <div className="App" style={{ padding: 20 }}>
      <div style={{ border: "1px solid yellowgreen", padding: 20 }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
       
        <button onClick={handleAddJob}>Add</button>
       
        <ul>
          {jobList.map((job, index) => (
            <li key={index}>{job}
            <button onClick={handleDelete}>Delete</button>
            {/* <button onClick={handleEdit}>Edit</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
