import React, { useEffect } from "react";
import { useMyMutation } from "../tanstack/useMyMutation";
import { useMyQuery } from "../tanstack/useMyQuery";

const AllUser = () => {
  const payload = {
    username: "tan",
    email: "tan@krishna.com",
    password: "xyz",
  };
  const url = "http://127.0.0.1:8000/api/auth/";
  const authMutaion = useMyQuery("book/", {
    queryKey: ["API"],
  });
  const loginMutation = useMyMutation("", payload, {
    mutaionKey: ["LOGIN"],
    method: "post",
    onSuccess: (data) => console.log("The login user details ", data),
    onError: (e) => console.log("Error doing loginn", e.response?.data),
  });

  console.log(authMutaion);

  useEffect(() => {
    if (authMutaion.isSuccess) {
      console.log(authMutaion.data);
    }
  }, [authMutaion.isSuccess, authMutaion.data]);

  return (
    <div>
      <h1>{authMutaion.isLoading ? "Loading... " : "Hello"}</h1>

      {authMutaion.data?.map((d) => (
        <>
          <li>{d.name}</li>
        </>
      ))}

      <br />
      <br />
      <button onClick={() => loginMutation.mutate()}>Login</button>
    </div>
  );
};

export default AllUser;
