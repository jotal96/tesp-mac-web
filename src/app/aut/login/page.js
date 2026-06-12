'use client'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {login} from "../../../api/api";


export default function Login(){
    // variáveis de estado de inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // função quando se clica no botão submit
    const handleSubmit = async () => {
        try {
            let resposta = await login(username, password);
            sessionStorage.setItem("jwt", resposta);
        }catch(err){
            alert("Erro: "+err.message);
        }
    }


    return <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
        </Form.Group>
        <Button onClick={()=>{handleSubmit()}} variant="primary" type="submit">
            Submit
        </Button>
    </>
}