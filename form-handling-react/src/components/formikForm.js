import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form submitted successfully:', values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Username</label>
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="span" />
                </div>
                <div>
                    <label>Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="span" />
                </div>
                <div>
                    <label>Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="span" />
                </div>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};

export default FormikForm;