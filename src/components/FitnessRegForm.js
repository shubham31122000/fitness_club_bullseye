
import { useState } from "react"

export default function FitnessRegForm(props) {
  let style = {
    input: "py-2 border outline-none px-3",
    btn: "py-2 px-3 rounded cursor-pointer border outline-none self-center bg-blue-600 text-white"
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      phoneNo: phone,
      address: address,
    }
    if (name === "" || email === "" || phone === "" || address === "")
      alert("Fill data and then submit")
    else {
      alert("User added successfully!")
      props.onGetUserData(data);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
      
  }

  return (
    <>
      {!props.viewList && (
        <div className="mx-auto max-w-md mt-10 flex flex-col">
          <h1 className="text-center font-bold text-lg uppercase">Fitness Club Registration</h1>
          <form onSubmit={submitHandler} className="pt-12 pb-8 px-8 shadow-lg border mt-2 flex flex-col space-y-3">
            <input style={{height: "30px", width: "280px", backgroundColor: "white"}} type="text" placeholder="Name" className={style.input} onChange={(e) => setName(e.target.value)} value={name}/><br/><br/>
            <input style={{height: "30px", width: "280px", backgroundColor: "white"}} type="email" placeholder="Email" className={style.input} onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
            {/* <input style={{height: "30px", width: "280px"}} type="number" placeholder="Phone Number" className={style.input} onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/> */}
            <input style={{height: "30px", width: "280px", backgroundColor: "white"}} type="number" placeholder="Phone Number" className={style.input} onChange={(e) => setPhone(e.target.value)} value={phone}/><br/><br/>
            <input style={{height: "30px", width: "280px", backgroundColor: "white"}} type="text" placeholder="Address" className={style.input} onChange={(e) => setAddress(e.target.value)} value={address}/><br/><br/>
            <input style={{backgroundColor: "aqua", padding: "8px"}} type="submit" value="Add Member" className={style.btn} /><br/><br/>
          </form>
          <button style={{backgroundColor: "aqua", padding: "8px"}} className="border py-2 px-3 rounded cursor-pointer outline-none self-center mt-4 bg-blue-600 text-white" onClick={props.memberList}>View Member List</button>
        </div>
      )}
    </>

  )
}