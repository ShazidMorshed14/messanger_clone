import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const Form = ({ isSigninPage = true }) => {
  const [data, setData] = useState({
    ...(!isSigninPage && {
      name: "",
    }),
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col justify-center items-center bg-white w-[550px] h-[600px] shadow-lg rounded-lg">
      <div className="text-4xl font-extrabold">
        Welcome {isSigninPage && "Back"}
      </div>
      <div className="text-xl font-light my-6">
        {isSigninPage ? "Sign in to explore" : "Sign up now to get started"}
      </div>
      {!isSigninPage && (
        <Input
          label="Full Name"
          name="name"
          isRequired={true}
          placeholder="Enter Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      )}
      <Input
        label="Email"
        name="email"
        isRequired={true}
        placeholder="Enter Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        label="Password"
        name="password"
        isRequired={true}
        placeholder="Enter Password"
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <Button label="Sign In" className="w-1/2" />
      <div>
        {isSigninPage
          ? "Didn't have an account? "
          : "Already have an account? "}
        <span className="text-primary underline cursor-pointer">
          {!isSigninPage ? "Sign in" : "Sign Up"}
        </span>{" "}
      </div>
    </div>
  );
};

export default Form;
