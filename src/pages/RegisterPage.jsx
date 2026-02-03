import { ErrorMessage, Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/images/facebook.png";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {domain} from "../store"
import HeroSectionHome from "../components/HeroSectionHome";
export default function RegisterPage() {
  const navigate = useNavigate();
  const url = domain + "/register";
  const handleRegister = (values) => {
    let dataSend = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
    axios
      .post(url, dataSend)
      .then((res) => {
        toast.success("Register successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Register Is Not successful");
      });
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .min(2, "First name is too short")
      .required("First name is required"),
    last_name: Yup.string()
      .min(2, "Last name is too short")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  return (
    <>
    <HeroSectionHome />
      <section className="bg-creamy flex flex-col items-center">
        <div className="container flex justify-center py-15">
          <div className="w-full flex flex-col gap-10 md:w-xl p-3">
            <div className="flex flex-col text-black">
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  password: "",
                  password_confirmation: "",
                  ischecked: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleRegister(values)}
              >
                <Form className="flex flex-col gap-6">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-70">
                      <h1 className="font-semibold text-[18px]">First Name</h1>
                      <Field
                        name="first_name"
                        type="text"
                        placeholder="Enter First Name"
                        className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                      />
                      <ErrorMessage
                        name="first_name"
                        component={"p"}
                        className="text-red-400 "
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-70">
                      <h1 className="font-semibold text-[18px]">Last Name</h1>
                      <Field
                        name="last_name"
                        type="text"
                        placeholder="Enter Last Name"
                        className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                      />
                      <ErrorMessage
                        name="last_name"
                        component={"p"}
                        className="text-red-400 "
                      />
                    </div>
                  </div>
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
                    <h1 className="font-semibold text-[18px]">password</h1>
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
                      Confirm password
                    </h1>
                    <Field
                      name="password_confirmation"
                      placeholder="Enter password"
                      className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                    />
                    <ErrorMessage
                      name="password_confirmation"
                      component={"p"}
                      className="text-red-400 "
                    />
                  </div>
                  <label className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="ischecked"
                      className="w-4 h-4 accent-move cursor-pointer"
                    />
                    Agree with
                    <span className="text-move">Terms & Conditions</span>
                  </label>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-move rounded-xl text-white hover:cursor-pointer shadow-2xl"
                  >
                    Sign Up
                  </button>
                  <p className="text-[16px] font-normal text-center">
                    Already have an account?
                    <Link to="/login" className="text-move">
                      Login
                    </Link>
                  </p>
                  <p className="text-[16px] font-normal text-center text-[#00000080]">
                    or
                  </p>
                  <button className="w-full px-4 py-3 rounded-xl bg-white text-black flex justify-center items-center gap-4 hover:cursor-pointer shadow-2xl">
                    <FcGoogle className="text-2xl" />
                    Login with Google
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl bg-white text-black flex justify-center  items-center gap-4 hover:cursor-pointer shadow-2xl">
                    <img className="w-5" src={facebook} alt="" />
                    Login with Facebook
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
