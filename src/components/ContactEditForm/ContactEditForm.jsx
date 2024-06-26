import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactEditForm.module.css";
import { LiaSave } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?[ ()0-9-]+$/, "Invalid phone number")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactEditForm = ({ contactToEdit, onSaveEditedContact, onCancel }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: contactToEdit.name,
    number: contactToEdit.number,
  };

  const handleSubmit = (values, actions) => {
    const editedContact = {
      id: contactToEdit.id,
      name: values.name.trim(),
      number: values.number.trim(),
    };
    onSaveEditedContact(editedContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.nameWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage name="name" component="p" className={css.error} />
        </div>

        <div className={css.numberWrapper}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage name="number" component="p" className={css.error} />
        </div>

        <div className={css.btnWrapper}>
          <button className={css.btnCancel} onClick={onCancel}>
            <MdOutlineCancel className={css.btnCancel} />
            Cancel
          </button>

          <button type="submit" className={css.btnSave}>
            <LiaSave className={css.saveIcon} />
            Save contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactEditForm;
