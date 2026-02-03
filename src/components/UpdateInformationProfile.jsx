import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain } from "../store";

export default function UpdateInformationProfile({ setUserData }) {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
      .required("Phone is required"),
    address: Yup.string()
      .min(5, "Address is too short")
      .required("Address is required"),
  });

  const token = localStorage.getItem("token");

  const handleInformation = (values) => {
    let url = domain + "/profile/update";
    axios
      .post(url, values, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const updatedUser = res.data.data;
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUserData(updatedUser);
        toast.success(res.data.message);
      })
      .catch((err) => {
        if (err.response?.status == 401) {
          toast.error("Error Data Of User, please login again");
          localStorage.clear();
          navigate("/login");
        }

        const message = err.response?.data?.message;

        if (message?.includes("users_email_unique")) {
          toast.error("Email already exists");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
<section className="w-full flex justify-center bg-creamy py-30 px-4 md:px-0">
  <div className="container flex justify-center">
    <div className="flex flex-col text-black w-full md:w-157.5">

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleInformation(values)}
      >
        <Form className="flex flex-col gap-6">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 w-77">
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
                    className="text-red-400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-77">
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
                    className="text-red-400"
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
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px]">Phone</h1>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter phone"
                  className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="phone"
                  component={"p"}
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[18px]">Address</h1>
                <Field
                  name="address"
                  placeholder="Enter Address"
                  className="w-full p-6 input shadow-2 rounded-lg border border-[#FFFFFF] shadow-2xl bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="address"
                  component={"p"}
                  className="text-red-400"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-move rounded-xl text-white hover:cursor-pointer shadow-2xl"
              >
                Update information
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
