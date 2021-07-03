import { Formik, Field } from 'formik';
import { useState, useRef } from 'react';
import * as Yup from 'yup';
import styles from './Form.module.scss';

const Form = ({ children, className, ...rest }) => {
  let formClassName = styles.container;
  const initValues = {
    first_name: '',
    last_name: '',
    job: '',
    description: '',
  };
  const SCHEMA = Yup.object().shape({
    first_name: Yup.string()
      .strict(false)
      .required('Please provide first name')
      .trim('Include spaces before and after the field is not allowed')
      .nullable(),
    last_name: Yup.string()
      .strict(false)
      .required('Please provide last name')
      .trim('Include spaces before and after the field is not allowed')
      .nullable(),
    job: Yup.string()
      .strict(false)
      .required('Please provide job title')
      .trim('Include spaces before and after the field is not allowed')
      .nullable(),
    description: Yup.string()
      .strict(false)
      .required('Please provide job description')
      .trim('Include spaces before and after the field is not allowed')
      .nullable(),
  });

  if (className) {
    formClassName = `${formClassName} ${className}`;
  }
  const formRef = useRef(null);

  const formSubmit = () => {

  };

  const filtered = (raw, allowed) => Object.keys(raw)
    .filter((key) => Object.keys(allowed).includes(key))
    .reduce((obj, key) => ({
      ...obj,
      [key]: raw[key],
    }), {});

  return (
    <div className={formClassName}>
      <Formik
        initialValues={initValues}
        enableReinitialize
        validationSchema={SCHEMA}
        onSubmit={formSubmit}
        ref={formRef}
      >
        {({
          setSubmitting,
          submitForm,
          values,
          status,
          setFieldValue,
          isValidating,
          setStatus,
          isSubmitting,
          touched,
          errors,
          submitCount,
        }) => (
          <form className={styles.form}>
            <div className={styles.fieldContainer}>
              <div className={`${styles.field} ${styles.half} `}>
                <label
                  htmlFor="firstName"
                >
                  First name
                </label>
                {console.log('errors ===', errors, touched)}
                <Field
                  type="text"
                  id="firstName"
                  name="first_name"
                />
              </div>
              <div className={`${styles.field} ${styles.half} ${styles.last}`}>
                <label
                  htmlFor="lastName"
                >
                  last name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="last_name"
                />
              </div>
              <div className={`${styles.field} ${styles.tnb}`}>
                <label
                  htmlFor="job"
                >
                  job
                </label>
                <Field
                  type="text"
                  id="job"
                  name="job"
                />
              </div>
              <div className={`${styles.field} ${styles.tnb}`}>
                <label
                  htmlFor="description"
                >
                  description
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                />
              </div>
            </div>
            {Object.values(filtered(errors, touched)).map((o, i) => <p className="text-danger" key={i}>{o}</p>)}

            <a
              href="javascript:;"
              onClick={submitForm}
              className={styles.submit}
            >
              SUBMIT
            </a>

          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
