import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form submitted:', values);
        // Simulate API call here
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field type="text" name="username" id="username" />
                        <ErrorMessage name="username" component="p" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="p" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" id="password" />
                        <ErrorMessage name="password" component="p" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;