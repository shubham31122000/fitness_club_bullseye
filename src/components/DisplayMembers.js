
export default function DisplayMembers({ userData, viewList, memberList }) {
  let display = (
    <div className="max-w-xl mx-auto mt-10 flex flex-col">
      <h1 className="font-bold text-2xl self-center mb-4">Member List</h1>
      <table>
        <thead className="bg-blue-700 text-white">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr className="bg-white text-black">
              <td className="py-3">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="border py-2 px-3 rounded cursor-pointer outline-none self-center mt-4 bg-blue-600 text-white" onClick={memberList}>Back to Home</button>
    </div >
  );

  return (
    <>
      {viewList && display}
    </>
  )
}
