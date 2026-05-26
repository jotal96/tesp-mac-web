'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import AddToTaskListComponent from "@/app/lista/AddToTaskListComponent";
import {fetchLista} from "@/api/api";

export default function Lista() {
    /*
        Variáveis de estado
     */
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    /*
        Use Effect
     */
    useEffect(async () => {
        try {
            let dadosDoServidor = await fetchLista();
            let tarefasDoServidor = dadosDoServidor.data.map((elem, index)=>{
                return elem.DescricaoTarefa;
            });

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLista(tarefasDoServidor);

        }catch (err){
            alert("Erro a buscar lista de tarefas do servidor")
            console.log(err);
        }

    }, []);


    /*
        Função para adicionar texto do input(ligado a uma variável de estado)
            à lista de tarefas(varíavel de estado)
     */
    const handleButtonClick = () => {
        if (inputTexto != null && inputTexto != "") {
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

    /*
        Função para apagar tarefa da lista dado o ID
     */
    const handleDeleteTask = (idTask) => {
        // copio a variavel de estado
        var copiaLista = [...lista];

        // remove da lista o indice
        copiaLista.splice(idTask, 1);

        // por fim atualizo a lista
        setLista(copiaLista);
    }

    /*
        Função para editar a tarefa,
        dado o ID e o VALOR
     */
    const handleEditTask = (idTask, taskValue) => {
        // copio a variavel de estado
        var copiaLista = [...lista];

        // atualizar o valor
        copiaLista[idTask] = taskValue;

        // por fim sempre atualizar a variavel do estado
        setLista(copiaLista);
    }


    return <div>
        <main>
            <h2 style={{color: 'lightcyan'}}>Lista de tarefas</h2>
            <div className={styles.displayFlex}>
                <label>Escreve no input a tarefa que queres realizar</label>

                <AddToTaskListComponent inputTextoParam={inputTexto} setInputTextoParam={setInputTexto}
                                        handleButtonClickParam={handleButtonClick}></AddToTaskListComponent>

                {lista.map((valor, indice) => {

                    return <div className={styles.itemLista} key={indice + valor}>
                        <p>{indice}: {valor}</p>
                        <div>
                            <button onClick={() => {
                                var res = prompt("Insira o valor para atualizar");
                                if (res != null && res != "") {
                                    handleEditTask(indice, res);
                                }
                            }}>✍️
                            </button>
                            <button onClick={() => {
                                handleDeleteTask(indice);
                            }}>❌
                            </button>
                        </div>

                    </div>;
                })}
            </div>
        </main>
    </div>;
}