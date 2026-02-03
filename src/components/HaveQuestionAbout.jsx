import { ErrorMessage, Field, Form, Formik } from "formik";
import QueImg from "../assets/images/HaveQuestiomImg.jpg";
import * as Yup from "yup";
import axios from "axios";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import toast from "react-hot-toast";
import { domain } from "../store";

export default function HaveQuestionAbout() {
  const values = { name: "", email: "", message: "" };
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    message: Yup.string().required(),
  });
  const handleSubmit = (values) => {
    let url = domain + "/contacts/store";
    axios
      .post(url, values)
      .then((res) => {
        console.log(res);
        toast.success("Message sent successfully");
      })
      .catch((err) => {
        if (err.response?.status == 500) {
          toast.error("Server error, please try again later");
        } else {
          toast.error("Something went wrong");
        }
      });
  };
  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Background Image */}
      <img
        src={QueImg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2b1f39]/90"></div>

      <div className="relative z-10 container flex flex-col gap-20 lg:flex-row justify-between mx-auto px-6 py-30">
        <div className="max-w-145 flex flex-col gap-19 justify-center">
          <h1 className="text-[40px] font-bold text-white">
            Have a Questions?
            <br /> Get in Touch
          </h1>
          <p className="text-[18px] text-white/50 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
          <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-20">
                <div className="flex flex-col">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    className="w-60 p-6 input shadow-2 rounded-lg border border-gray-400 shadow-2xl bg-[#40354c]"
                  />
                  <ErrorMessage
                    name="name"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    className="w-60 p-6 input shadow-2 rounded-lg border border-gray-400 shadow-2xl bg-[#40354c]"
                  />
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className="text-red-400 "
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <Field
                  name="message"
                  type="text"
                  placeholder="Enter message"
                  as="textarea"
                  className="w-full md:w-140 min-h-40 p-6 input shadow-2 rounded-lg border border-gray-400 shadow-2xl bg-[#40354c]"
                />
                <ErrorMessage
                  name="message"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
              <button
                type="submit"
                className="bg-move text-white p-4 text-center w-60 rounded-xl hover:cursor-pointer"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
        <div className="flex flex-col gap-15">
          <div className="flex gap-7 items-center">
            <span className="bg-white rounded-xl p-4">
              <BsFillTelephoneFill className="text-black text-2xl" />
            </span>
            <h1>01205216828</h1>
          </div>
          <div className="flex gap-7 items-center">
            <span className="bg-white rounded-xl p-4">
              <TfiEmail className="text-black text-2xl" />
            </span>
            <h1>Example@gmail.com</h1>
          </div>
          <div className="flex gap-7 items-center">
            <span className="bg-white rounded-xl p-4">
              <FaLocationDot className="text-black text-2xl" />
            </span>
            <h1>
              adipiscing elit. Mauris et ultricies
              <br /> est. Aliquam in justo varius,
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
