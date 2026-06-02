import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';

export default function TaskListItem({valor, handleEdit, handleDelete, indice}) {
    return <div className={styles.itemLista}>
        <p>{valor.id}: {valor.DescricaoTarefa}</p>
        <div>
            <Button variant="secondary" onClick={() => {
                var res = prompt("Insira o valor para atualizar");
                if (res != null && res != "") {
                    handleEdit(indice, res);
                }
            }} >Editar</Button>
            <Button variant="danger" onClick={() => {
                handleDelete(valor.documentId);
            }}>Danger</Button>
        </div>

    </div>
}