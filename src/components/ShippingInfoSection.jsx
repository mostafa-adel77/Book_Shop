import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function ShippingInfoSection() {
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Phone must be valid")
      .required("Phone is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    city: Yup.string().required("City is required"),

    state: Yup.string().required("State is required"),

    zip: Yup.string()
      .matches(/^[0-9]{4,10}$/, "Zip must be valid")
      .required("Zip is required"),

    address: Yup.string()
      .min(5, "Address is too short")
      .required("Address is required"),
  });
  return (
    <div className="w-full lg:w-190 rounded-lg border border-[#22222233] bg-white p-10 text-black">
      <div className="flex flex-col gap-10">
        <h1 className="text-xl font-bold">Shipping information</h1>
        <Formik
          initialValues={{
            fullname: "",
            phone: "",
            email: "",
            city: "",
            state: "",
            zip: "",
            address: "",
          }}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  Name*
                </h1>
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="fullname"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  Phone*
                </h1>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter Phone"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="phone"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  Email*
                </h1>
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  City*
                </h1>
                <Field
                  name="city"
                  type="text"
                  placeholder="Enter City"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="city"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  State*
                </h1>
                <Field
                  name="state"
                  type="text"
                  placeholder="Enter State"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="state"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
              <div className="flex flex-col gap-2 w-83">
                <h1 className="font-semibold text-[18px] text-[#22222280]">
                  Zip*
                </h1>
                <Field
                  name="zip"
                  type="text"
                  placeholder="Enter Zip"
                  className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
                />
                <ErrorMessage
                  name="zip"
                  component={"p"}
                  className="text-red-400 "
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="font-semibold text-[18px] text-[#22222280]">
                Address*
              </h1>
              <Field
                name="address"
                type="text"
                placeholder="Enter Address"
                className="w-full p-6 input rounded-lg border border-[#22222233] bg-[#FFFFFF]"
              />
              <ErrorMessage
                name="address"
                component={"p"}
                className="text-red-400 "
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
