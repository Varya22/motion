import React, { useState } from 'react'
import { Label, Form, FormGroup, Button, Input } from 'reactstrap'
import AuthService from '../services/Auth.service';

const Login = () => {
  // Создание переменных с хуком useState для отслеживания изменения полей ввода
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // Создание переменных с хуком useState для отслеживания ввода данных( если ничего не ввели, то состояние менется)
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  // Создаем функцию для авторизации
  const onLogin = async () => {
    setUsernameInvalid(false);
    setPasswordInvalid(false);
    let isValid = true;
    // Проверяем валидность введенных данных
    if (!password || password.length < 6) {
      setPasswordInvalid(true);
      isValid = false;
    }
    if (!isValid) {
      alert('Пожалуйста, введите корректные данные');
      return;
    }
    console.log(username, password)
    // Создаем запрос к серверу для авторизации с обработкой полученных данных
    await AuthService.login(username, password)
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          console.log(response);
          alert('Вход в систему совершен');
          window.location.href='/';
        } else {
          AuthService.getCurrentUser()
          setUsername('');
          setPassword('');

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Создаем несколько функций для считавания каждого изменений полей
  const handleOnChange1 = (event) => {
    setUsername(event.target.value)
  }
  const handleOnChange2 = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      {/* Создаем форму для ввода данных */}
      <Form style={{ paddingTop: 0, paddingLeft: 400, paddingRight: 400, fontFamily: 'Montserrat', fontSize: 15, }}>
        <FormGroup>
          <Label>Почта</Label>
          <Input
            placeholder="Введите свою почту"
            type="email"
            value={username}
            onChange={(event) => handleOnChange1(event)}
          />
          {usernameInvalid && <div className="invalid-feedback">Пожалуйста, введите корректный адрес почты</div>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Пароль</Label>
          <Input
            placeholder="Введите свой пароль"
            type="password"
            value={password}
            onChange={(event) => handleOnChange2(event)}
            invalid={passwordInvalid}
          />
          {passwordInvalid && <div className="invalid-feedback">Пароль должен содержать не менее 6 символов</div>}
        </FormGroup>
      </Form>
      <Button color='dark' outline size="lg" onClick={onLogin} style={{ marginLeft: 720 }}>Войти</Button>
    </>

  )
}
export default Login