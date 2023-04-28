import React, { useState } from 'react'
import { Label, Form, FormGroup, Button, Input } from 'reactstrap'
// import AuthService from '../services/Auth.service';
const Registration = () => {
   
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    // Создаем функцию для регистрации
    const onRegistration = async () => {
        setEmailInvalid(false);
        setPasswordInvalid(false);
        setNameInvalid(false);

        if (!password || !email || !username) {
            if (!password) setPasswordInvalid(true);
            if (!email) setPasswordInvalid(true);
            if (!username) setNameInvalid(true);
            alert("Ошибка ввода");
        }
       
        // await AuthService.register(username, email, password)
        //     .then((response) => {
        //         console.log(response.data)
        //         if (response.data.status != 200) {
        //             console.log(response)
        //             alert(response.data.message)
        //         } else {
        //             alert(response.data.message)
        //             setName("");
        //             setEmail("");
        //             setPassword("");
        //         }
        //     })
        //     .catch((err) => {
        //         alert(err.response.data.message)
        //     });
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
    console.log(handleOnChange)
    return (
        <>
            {/* Создаем форму для ввода данных */}
            <Form>
                <FormGroup>
                    <Label>
                        Имя
                    </Label>
                    <Input
                        placeholder="Пожалуйста, введите своё имя"
                        type='text'
                        value={username}
                        onChange={(event) => handleOnChange(event)}
                        invalid={nameInvalid}
                    />
                </FormGroup >
                <FormGroup>
                    <Label>
                        Почта
                    </Label>
                    <Input
                        size={{}}
                        placeholder="Пожалуйста, введите свою почту"
                        type='email'
                        value={email}
                        onChange={(event) => handleOnChange1(event)}
                        invalid={emailInvalid}
                    />
                </FormGroup >
                <FormGroup>
                    <Label for="examplePassword">
                        Пароль
                    </Label>
                    <Input
                        placeholder="Пожалуйста, введите свой пароль"
                        type='password'
                        value={password}
                        onChange={(event) => handleOnChange2(event)}
                        invalid={passwordInvalid}
                    />
                </FormGroup>
            </Form>
            <Button onClick={onRegistration}>Войти</Button>
        </>
    )
}
export default Registration