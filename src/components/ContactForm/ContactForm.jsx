import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (value, actions) => {
    onAdd({ id: nanoid(), name: value.name, number: value.phone });
    actions.resetForm();
  };
  const Schema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(6, "Wrong phone number!").max(10, "Мaximum 10 digits").required("Required"),
  });
  return (
    <div className={css.wrap}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.lab}>
            Name
          </label>
          <ErrorMessage name="name" />
          <Field id="name" className={css.input} name="name" />

          <label htmlFor="number" className={css.lab}>
            Phone
          </label>
          <ErrorMessage name="phone" />

          <Field id="number" className={css.input} name="phone" />
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
