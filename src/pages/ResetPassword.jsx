import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { domain } from "../store";
import HeroSectionHome from "../components/HeroSectionHome";

export default function ResetPassword() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
    otp: Yup.string()
      .required("OTP is required")
      .matches(/^[0-9]+$/, "OTP must contain only numbers")
      .min(4, "OTP must be at least 4 digits")
      .max(6, "OTP must be at most 6 digits"),
  });
  const values = {
    email: "",
    password: "",
    password_confirmation: "",
    ischecked: false,
    otp: "",
  };
  const url = domain + "/reset-password";
  const handleReset = (values) => {
    let dataSend = {
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      otp: values.otp,
    };
    axios
      .post(url, dataSend)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch(() => {});
  };
  return (
    <>
    <HeroSectionHome />
      <section className="w-full flex flex-col items-center bg-creamy">
        <div className="container flex justify-center">
          <div className="w-xl flex flex-col items-center py-15 gap-10 px-3">
            <div className="flex flex-col gap-4">
              <h1 className="text-move text-[16px] font-semibold text-center">
                Create new password!
              </h1>
              <p className="text-[#22222280] text-[14px] text-center font-normal ">
                Create a strong password <br />
                Your new password must be different from previous one
              </p>
            </div>
            <Formik
              initialValues={values}
              onSubmit={(values) => handleReset(values)}
              validationSchema={validationSchema}
            >
              <Form className="w-full text-black flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-[18px]">Email</h1>
                  <Field
                    name="email"
                    type="text"
                    placeholder="example@gmail.com"
                    className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                  />
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-[18px]">Password</h1>
                  <Field
                    name="password"
                    type="text"
                    placeholder="Enter password"
                    className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                  />
                  <ErrorMessage
                    name="password"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-[18px]">
                    Confirm Password
                  </h1>
                  <Field
                    name="password_confirmation"
                    type="text"
                    placeholder="Enter Confirm password"
                    className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold text-[18px]">Otp</h1>
                  <Field
                    name="otp"
                    type="text"
                    placeholder="Enter otp"
                    className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                  />
                  <ErrorMessage
                    name="otp"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
                <label className="flex items-center gap-3">
                  <Field
                    type="checkbox"
                    name="ischecked"
                    className="w-4 h-4 accent-move cursor-pointer"
                  />
                  Remember Me
                </label>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-move rounded-xl text-white shadow-2xl hover:cursor-pointer"
                >
                  Reset password
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
