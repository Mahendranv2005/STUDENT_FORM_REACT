import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import React from 'react';

function EmployeeFeedbackForm() {
    // Initial Values for the form
    const initialValues = {
        name: "",   // text
        email: "",  // email
        department: "",  // dropdown
        rating: "",  // number
        feedback: "",  // text area
    };

    // Validation Schema using Yup 
    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Name must be at least 3 characters").required("Full name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        department: Yup.string().required("Department is required"),
        rating: Yup.number().min(1, "Minimum rating is 1").max(5, "Maximum rating is 5").required("Rating is required"),
        feedback: Yup.string().max(200, "Feedback must be under 200 characters").required("Feedback is required"),
    });

    // Handle Submit function 
    const onSubmit = (values, { resetForm }) => {
        alert("Form submitted successfully!");
        console.log(values);
        resetForm();
    };

    return (
        <div className='form-container'>
            <h1>Employee Feedback Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label>Full Name : </label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label>Email : </label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label>Department : </label>
                            <Field as="select" name="department">
                                <option value="">Select a Department</option>
                                <option value="HR">HR</option>
                                <option value="IT">IT</option>
                                <option value="Finance">Finance</option>
                            </Field>
                            <ErrorMessage name="department" component="div" className="error" />
                        </div>
                        <div>
                            <label>Rating : </label>
                            <Field type="number" name="rating" />
                            <ErrorMessage name="rating" component="div" className="error" />
                        </div>
                        <div>
                            <label>Feedback : </label>
                            <Field as="textarea" name="feedback" />
                            <ErrorMessage name="feedback" component="div" className="error" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EmployeeFeedbackForm;
