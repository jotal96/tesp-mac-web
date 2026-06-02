import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';

export default function TaskListItem({tarefa, handleEdit, handleDelete, indice}) {
    return <div className={styles.itemLista}>
        <p>{tarefa.id}: {tarefa.DescricaoTarefa}</p>
        <div>
            <Button variant="secondary" onClick={() => {
                handleEdit(tarefa);
            }} >Editar</Button>
            <Button variant="danger" onClick={() => {
                handleDelete(tarefa.documentId);
            }}>Danger</Button>
        </div>

    </div>
}