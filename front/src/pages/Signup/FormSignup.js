import React from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import { Form } from 'react-bootstrap';
import './Signup.css';
const initialValues = {
  name: '',
  email: 'email@example.com',
  lastname:'',
  password: '',
  checkPassword: ''
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Необходимо указать имя'),
  lastname: yup.string().required('Необходимо указать фамилию'),
  email: yup.string().email().required('Необходимо указать email'),
  password: yup.string().min(8, 'Минимальная длина пароля - 8').required('Необходимо указать пароль'),
  checkPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .min(8, 'Минимальная длина пароля - 8')
    .required('Необходимо подтверждение пароля')
});

const FormField = ({ className, name, label, ...props }) => {
  const [field, meta] = useField(name);
  const isValid = meta.touched && meta.error === undefined;
  const isInvalid = meta.touched && meta.error !== undefined;
  // console.log(field)
  

  return (
    <Form.Group className={className} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        {...props}
        value={field.value}
        isValid={isValid}
        isInvalid={isInvalid}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      {isInvalid && <Form.Text className="text-danger">{meta.error}</Form.Text>}
    </Form.Group>
  );
};
// const reg(name, lastname, email, password, checkPassword)=>{
//   console.log(name, lastname, email, password, checkPassword);
// }
const FormSignup = () => (
 

  <Formik initialValues={initialValues} 
 
  >

    {({ handleReset }) => (
     
      <Form style={{ paddingTop: 0, paddingLeft: 400, paddingRight: 400, fontFamily: 'Montserrat', fontSize: 15, }}>

        <FormField
          className="mb-2"
          name="name"
          type="name"
          label="Имя"
          placeholder="Введите имя"
        />
 
        
        <FormField
          className="mb-2"
          name="lastname"
          type="lastname"
          label="Фамилия"
          placeholder="Введите фамилию"
        />
        <FormField
          className="mb-2"
          name="email"
          type="email"
          label="Email"
          placeholder="Введите email"
        />
        <FormField
          className="mb-2"
          name="password"
          type="password"
          label="Пароль"
          placeholder="Придумайте пароль"
        />
        <FormField
          className="mb-4"
          name="checkPassword"
          type="password"
          label="Подтверждение пароля"
          placeholder="Повторите пароль"
        />
        <button type="button" class="btn btn-lg btn-block btn-outline-secondary"  style={{ marginLeft: 250 }}  onClick ={async (initialValues) => {
    console.log(initialValues)}}
    // await new Promise((r) => setTimeout(r, 500));
     >Зарегистироваться</button>
        {/* <Form.Group className="btn btn-outline-dark">
          <Button variant="secondary"  onClick={handleReset}>
            Зарегистироваться
          </Button>
        </Form.Group> */}

      </Form>
    )}
  </Formik>
);

export default FormSignup;
