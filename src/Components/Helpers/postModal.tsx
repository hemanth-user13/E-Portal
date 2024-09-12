import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
}

interface FormValues {
  postTitle: string;
  createdDate: string;
  description: string;
  url: string;
  urlType: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mt-14 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
        <Formik
          initialValues={{
            postTitle: "",
            createdDate: new Date().toISOString().split("T")[0],
            description: "",
            url: "",
            urlType: "image", 
          }}
          validationSchema={Yup.object({
            postTitle: Yup.string().required("Post title is required"),
            createdDate: Yup.date().required("Created date is required"),
            description: Yup.string().required("Description is required"),
            url: Yup.string().required("URL is required"),
          })}
          onSubmit={(values: FormValues) => {
            onSubmit(values);
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="postTitle" className="block font-medium">
                  Post Title
                </label>
                <Field
                  id="postTitle"
                  name="postTitle"
                  type="text"
                  className="block w-full mt-2 border border-gray-300 rounded p-2"
                />
                <ErrorMessage
                  name="postTitle"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="urlType" className="block font-medium">
                  Media Type
                </label>
                <Field
                  as="select"
                  id="urlType"
                  name="urlType"
                  className="block w-full mt-2 border border-gray-300 rounded p-2"
                  value={values.urlType} // Bind value to Formik
                  onChange={(e) => setFieldValue("urlType", e.target.value)} // Update Formik value
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                </Field>
              </div>

              <div className="mt-4">
                <label htmlFor="url" className="block font-medium">
                  Enter{" "}
                  {values.urlType.charAt(0).toUpperCase() +
                    values.urlType.slice(1)}{" "}
                  URL
                </label>
                <Field
                  id="url"
                  name="url"
                  type="text"
                  className="block w-full mt-2 border border-gray-300 rounded p-2"
                />
                <ErrorMessage
                  name="url"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="createdDate" className="block font-medium">
                  Created Date
                </label>
                <Field
                  id="createdDate"
                  name="createdDate"
                  type="date"
                  className="block w-full mt-2 border border-gray-300 rounded p-2"
                />
                <ErrorMessage
                  name="createdDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="description" className="block font-medium">
                  Description
                </label>
                <Field
                  id="description"
                  name="description"
                  as="textarea"
                  rows="4"
                  className="block w-full mt-2 border border-gray-300 rounded p-2"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
