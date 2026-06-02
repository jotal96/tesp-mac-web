import styles from "./page.module.css";

export default function TaskListItem({valor, handleEdit, handleDelete, indice}) {
    return <div className={styles.itemLista}>
        <p>{valor.id}: {valor.DescricaoTarefa}</p>
        <div>
            <button onClick={() => {
                var res = prompt("Insira o valor para atualizar");
                if (res != null && res != "") {
                    handleEdit(indice, res);
                }
            }}>✍️
            </button>
            <button onClick={() => {
                handleDelete(valor.documentId);
            }}>❌
            </button>
        </div>

    </div>
}