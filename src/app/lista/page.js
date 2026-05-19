'use client'

import styles from "./page.module.css";
import {useState} from "react";

export default function Lista() {
    /*
        Variáveis de estado
     */
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    /*
        Funções
     */
    const handleButtonClick = () => {
        if(inputTexto != null && inputTexto !=""){
            // copio a variavel de estado
            var copiaLista = [...lista];
            // atualizo a copia da lista
            copiaLista.push(inputTexto);
            // por fim atualizo a lista
            setLista(copiaLista);

            // limpa o input onde o utilizador escreve
            setInputTexto("");
        }
    }


    return <div>
        <main>
            <h2 style={{color: 'lightcyan'}}>Lista de tarefas</h2>
            <div className={styles.displayFlex}>
                <label>Escreve no input a tarefa que queres realizar</label>
                <div className={styles.divInputBtn}>
                    <input value={inputTexto}
                           onChange={
                            (e)=>
                            {setInputTexto(e.target.value)}
                    }
                           className={styles.inputLista}/>
                    <button onClick={()=>{handleButtonClick();}}
                            className={styles.botaoLista}>Adiciona à lista de tarefas</button>
                </div>
                    {lista.map((entrada, i)=> {
                        return <p>{i}: {entrada}</p>;
                    })}
            </div>
        </main>
    </div>;
}