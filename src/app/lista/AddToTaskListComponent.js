export default function AddToTaskListComponent({inputTextoParam, setInputTextoParam, handleButtonClickParam}){
    return <div className={'row'}>
        <div className={'col-sm-12 col-md-6'}>
            <input value={inputTextoParam}
                   onChange={
                       (e)=>
                       {setInputTextoParam(e.target.value)}
                   }
                   className={'form-control'}/>
        </div>
        <div className={'col-sm-12 col-md-3'}>
            <button onClick={()=>{handleButtonClickParam();}}
                    className={'form-control btn btn-primary'}>Insere task</button>
        </div>
    </div>;
}