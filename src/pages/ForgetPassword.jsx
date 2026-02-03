import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { domain } from "../store";
import HeroSectionHome from "../components/HeroSectionHome";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const url = domain + "/forget-password";

  const handleForget = (initialValues) => {
    axios
      .post(url, initialValues)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        navigate("/addcode");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <HeroSectionHome />
      <section className="w-full flex flex-col items-center bg-creamy">
        <div className="container flex justify-center">
          <div className="w-xl flex flex-col items-center py-15 gap-10 px-3">
            <div className="flex flex-col gap-4">
              <h1 className="text-move text-[16px] font-semibold text-center">
                Forget Password?
              </h1>
              <p className="text-[#22222280] text-[14px] font-normal">
                Enter your email to reset your password
              </p>
            </div>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleForget}
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
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-move rounded-xl text-white shadow-2xl hover:cursor-pointer"
                >
                  
                  Send reset code
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
