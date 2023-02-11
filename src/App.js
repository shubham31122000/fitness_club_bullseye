import FitnessRegForm from "./components/FitnessRegForm";
import DisplayMembers from "./components/DisplayMembers";
import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [viewMemberList, setViewMemberList] = useState(false);

  const addData = (data) => {
    setUserData(prevData => [...prevData, data])
  }

  const updateViewMember = () => {
    setViewMemberList(prevValue => !prevValue);
  }

  return (
    <>
      <FitnessRegForm onGetUserData={addData} memberList={updateViewMember} viewList={viewMemberList}/>
      <DisplayMembers userData={userData} viewList={viewMemberList} memberList={updateViewMember}/>
    </>
  );
}

export default App;
