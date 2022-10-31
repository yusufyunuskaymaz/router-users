import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  // const { state: person } = useLocation();
  // console.log(person);
  const navigate = useNavigate()

  const [person , setPerson] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(person)

  return (
    <div className="container text-center mt-5 ">
      <div className="rounded-5 p-3 pt-4  d-inline-block">
      <h1 className="display-5 text-danger mt-2">
          {person?.first_name} {person?.last_name}
        </h1>
        <img className="shadow-lg my-3" src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button onClick={() => navigate("/")} className="btn btn-success me-3">Go Home</button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
