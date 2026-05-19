import styles from "./page.module.css";

export default function AddToTaskListComponent({inputTextoParam, setInputTextoParam, handleButtonClickParam}){
    return <div className={styles.divInputBtn}>
        <input value={inputTextoParam}
               onChange={
                   (e)=>
                   {setInputTextoParam(e.target.value)}
               }
               className={styles.inputLista}/>
        <button onClick={()=>{handleButtonClickParam();}}
                className={styles.botaoLista}>Adiciona à lista de tarefas</button>
    </div>;
}