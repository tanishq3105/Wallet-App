import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [findUser,setFindUser]=useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk?filter="+findUser,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, [findUser]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e)=>setFindUser(e.target.value)}
        ></input>
      </div>
      <div>
        {users
        .filter(user=>user._id)
        .map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
    const navigate=useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button onClick={()=>{navigate("/send?id="+user._id+"&name="+user.firstName)}} label={"Send Money"} />
      </div>
    </div>
  );
}
