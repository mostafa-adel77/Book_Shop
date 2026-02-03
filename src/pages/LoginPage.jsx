import { ErrorMessage, Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/images/facebook.png";
import * as Yup from "yup";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { domain } from "../store";
import HeroSectionHome from "../components/HeroSectionHome";
import { useEffect } from "react";

export default function LoginPage() {
  const { setUserData } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const url = domain + "/login";
  const values = {
    email: "",
    password: "",
    ischecked: false,
  };
  const handleLogin = (values) => {
    let dataSend = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(url, dataSend)
      .then((res) => {
        const token = res.data.data.token;
        const user = res.data.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setUserData(user);
        toast.success("Login successful");
        navigate("/");
      })

      .catch(() => {
        toast.error("This User is Not Sign Up");
        navigate("/register");
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("password is required"),
  });
  return (
    <>
      <HeroSectionHome />
      <section className="bg-creamy flex flex-col items-center ">
        <div className="container flex justify-center py-15">
          <div className="flex flex-col gap-10 w-xl px-3">
            <h1 className="font-semibold text-[16px] text-move text-center">
              Welcome Back!
            </h1>
            <div className="flex flex-col text-black">
              <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={(values) => handleLogin(values)}
              >
                <Form className="flex flex-col gap-6">
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
                  <div className="flex justify-between">
                    <label className="flex items-center gap-3">
                      <Field
                        type="checkbox"
                        name="ischecked"
                        className="w-4 h-4 accent-move cursor-pointer"
                      />
                      Remember Me
                    </label>
                    <Link
                      to="/forgetPassword"
                      className="text-[16px] text-move font-normal"
                    >
                      Forget password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-move rounded-xl text-white shadow-2xl hover:cursor-pointer"
                  >
                    Log in
                  </button>
                  <p className="text-[16px] font-normal text-center">
                    Don’t have an account?
                    <Link to="/register" className="text-move">
                      Signup
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
