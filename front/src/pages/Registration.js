import React, { useState } from 'react'
import * as yup from 'yup';
import { Label, Form, FormGroup, Button, Input } from 'reactstrap'
import AuthService from '../services/Auth.service';



const Registration = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [checkPassword, setcheckPassword] = useState('');

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    const [lastnameInvalid, setLastnameInvalid] = useState(false);
    const [checkPasswordInvalid, setcheckPasswordInvalid] = useState(false);
    // Создаем функцию для регистрации
    const onRegistration = async () => {
        setEmailInvalid(false);
        setLastnameInvalid(false);
        setPasswordInvalid(false);
        setNameInvalid(false);
        setcheckPasswordInvalid(false);



        if (!password || !lastname || !email || !username || !checkPassword) {
            if (!password) setPasswordInvalid(true);
            if (!lastname) setLastnameInvalid(true);
            if (!email) setEmailInvalid(true);
            if (!username) setNameInvalid(true);
            if (!checkPassword) setcheckPasswordInvalid(true);
            alert("Ошибка ввода");

        }


        await AuthService.register(username, email, password)
            .then((response) => {
                console.log(response.data)
                if (response.data.status !== 200) {
                    console.log(response)
                    alert(response.data.message)
                    window.location.href='/Login';
                } else {
                    alert(response.data.message)
                    setName("");
                    setLastname("");
                    setEmail("");
                    setPassword("");
                    setcheckPassword("");
                }
            })
            .catch((err) => {
                alert(err.response.data.message)
            });
    }
    // Создаем несколько функций для считавания каждого изменений полей
    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    const handleOnChange1 = (event) => {
        setEmail(event.target.value)
    }
    const handleOnChange2 = (event) => {
        setPassword(event.target.value)
    }
    const handleOnChange3 = (event) => {
        setLastname(event.target.value)
    }
    const handleOnChange4 = (event) => {
        setcheckPassword(event.target.value)
    }
    return (
        <>
            {/* Создаем форму для ввода данных */}
            <Form style={{ paddingTop: 0, paddingLeft: 400, paddingRight: 400, fontFamily: 'Montserrat', fontSize: 15, }}>
                <FormGroup>
                    <Label>
                        Имя
                    </Label>
                    <Input
                        placeholder="Введите имя"
                        type='text'
                        value={username}
                        onChange={(event) => handleOnChange(event)}
                        invalid={nameInvalid}
                    />
                    {nameInvalid && <div className="invalid-feedback">Необходимо ввести имя</div>}
                </FormGroup >
                <FormGroup>
                    <Label>
                        Фамилия
                    </Label>
                    <Input
                        placeholder="Введите фамилию"
                        type='text'
                        value={lastname}
                        onChange={(event) => handleOnChange3(event)}
                        invalid={lastnameInvalid}
                    />
                    {lastnameInvalid && <div className="invalid-feedback">Необходимо ввести фамилию</div>}

                </FormGroup >
                <FormGroup>
                    <Label>
                        Почта
                    </Label>
                    <Input
                        size={{}}
                        placeholder="Введите адрес электронной почты"
                        type='email'
                        value={email}
                        onChange={(event) => handleOnChange1(event)}
                        invalid={emailInvalid}
                    />
                    {emailInvalid && <div className="invalid-feedback">Необходимо ввести почту</div>}
                </FormGroup >
                <FormGroup>
                    <Label for="examplePassword">
                        Пароль
                    </Label>
                    <Input
                        placeholder="Придумайте пароль"
                        type='password'
                        value={password}
                        onChange={(event) => handleOnChange2(event)}
                        invalid={passwordInvalid}
                    />
                    {passwordInvalid && <div className="invalid-feedback">Необходимо ввести пароль </div>}
                </FormGroup>
                <FormGroup>
                    <Label for="checkPassword">
                        Подтверждение пароля
                    </Label>
                    <Input
                        placeholder="Повторите пароль"
                        type='password'
                        value={checkPassword}
                        onChange={(event) => handleOnChange4(event)}
                        invalid={checkPasswordInvalid}
                    />
                    {checkPasswordInvalid && <div className="invalid-feedback">Пароли не совпадают</div>}
                </FormGroup>
            </Form>
            <Button color='dark' outline size="lg" onClick={onRegistration} style={{ marginLeft: 650 }}>Зарегистироваться</Button>
        </>
    )
}
export default Registration