'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import AddToTaskListComponent from "@/app/lista/AddToTaskListComponent";
import {createTarefa, deleteTarefa, fetchLista} from "@/api/api";
import TaskListItem from "@/app/lista/TaskListItem";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Lista() {
    /*
        Variáveis de estado
     */
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const getTarefasFromServidor = async () => {
        let dadosDoServidor = await fetchLista();

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLista(dadosDoServidor.data);
    }

    /*
        Use Effect
     */
    useEffect(async () => {
        try {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            await getTarefasFromServidor();
        }catch (err){
            alert("Erro a buscar lista de tarefas do servidor")
            console.log(err);
        }

    }, []);



    /*
        Função para adicionar texto do input(ligado a uma variável de estado)
            à lista de tarefas(varíavel de estado)
     */
    const handleInsertClick = async () => {
        if (inputTexto != null && inputTexto != "") {
            /*
            // copio a variavel de estado
            var copiaLista = [...lista];
            // atualizo a copia da lista
            copiaLista.push(inputTexto);
            // por fim atualizo a lista
            setLista(copiaLista);

            // limpa o input onde o utilizador escreve
            setInputTexto("");
            */
            try {
                let resposta = await createTarefa(inputTexto);
                if(resposta){
                    alert("A tarefa foi inserida com sucesso");

                    await getTarefasFromServidor();
                }else{
                    alert("A tarefa não foi inserida");
                }
            }catch (err){
                alert("Erro a inserir tarefa no servidor")
                console.log(err);
            }
        }
    }

    /*
        Função para apagar tarefa da lista dado o ID
     */
    const handleDeleteTask = async (documentId) => {
        // copio a variavel de estado
        /*
        var copiaLista = [...lista];

        // remove da lista o indice
        copiaLista.splice(idTask, 1);

        // por fim atualizo a lista
        setLista(copiaLista);
        */

        let success = await deleteTarefa(documentId);

        if(success){
            await getTarefasFromServidor();
        }else{
            alert("Erro ao apagar tarefa "+idTask);
        }
    }

    /*
        Função para editar a tarefa,
        dado o ID e o VALOR
     */
    const handleEditTask = (task) => {
        // copio a variavel de estado
        /*
        var copiaLista = [...lista];

        // atualizar o valor
        copiaLista[idTask] = taskValue;

        // por fim sempre atualizar a variavel do estado
        setLista(copiaLista);
         */

        setTaskToEdit(task);
    }

    useEffect(() => {
        console.log(taskToEdit);
    }, [taskToEdit]);

    const handleClose = () => setTaskToEdit(null);

    return <div>
        <main>
            <h2 style={{color: 'lightcyan'}}>Lista de tarefas</h2>
            <div className={styles.displayFlex}>
                <label>Escreve no input a tarefa que queres realizar</label>

                <AddToTaskListComponent inputTextoParam={inputTexto} setInputTextoParam={setInputTexto}
                                        handleButtonClickParam={handleInsertClick}></AddToTaskListComponent>

                {lista.map((tarefaObj, indice) => {

                    return <TaskListItem key={tarefaObj.id} tarefa={tarefaObj} indice={indice}
                                         handleDelete={handleDeleteTask} handleEdit={handleEditTask}>

                    </TaskListItem>;
                })}

                <>
                    <Modal show={taskToEdit!=null} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Está a editar a tarefa com id {
                                taskToEdit!=null ?
                                    taskToEdit.id
                                    :
                                    ""
                            }</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </main>
    </div>;
}