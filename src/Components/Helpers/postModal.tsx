import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-3xl">
        {" "}
        <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
        <Formik
          initialValues={{
            postTitle: "",
            files:"",
            createdDate: new Date().toISOString().split("T")[0],
            description: "",
          }}
          validationSchema={Yup.object({
            postTitle: Yup.string().required("Post title is required"),
            files:Yup.string().required("URL is required"),
            createdDate: Yup.date().required("Created date is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        >
          {() => (
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
             <div>
             <label htmlFor="file" className="block font-medium">
                Enter img/video/audio Link
              </label>
              <Field 
              id="files"
              name="files"
              type="text"
              className="block w-full mt-2 border border-gray-300 rounded p-2"
              />
               <ErrorMessage
                  name="files"
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

              <div className="mt-6 flex justify-end">
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
                  Publish
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
