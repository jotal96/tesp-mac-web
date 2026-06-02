


export async function fetchLista(){
     let headerResponse = await fetch("http://localhost:1337/api/tarefas", {
        headers: {
            Accept: "application/json"
        }
    });

     if(headerResponse.ok){
         return await headerResponse.json();
     }else{
         throw new Error("A resposta do Servidor veio com erro: "+headerResponse.status)
     }
}

export async function createTarefa(textoTarefa){
    let headerResponse = await fetch('http://localhost:1337/api/tarefas', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'data': {
                'DescricaoTarefa': textoTarefa
            }
        })
    });

    if(headerResponse.status==201){
        return true;
    }
    else{
        return false;
    }
}

export async function deleteTarefa(documentId){
    let headerResponse = await fetch('http://localhost:1337/api/tarefas/'+documentId, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json'
        }
    });

    if(headerResponse.status==204){
        return true;
    }
    else{
        return false;
    }
}

/*
NAO BLOQUEANTE FETCH

 fetch("http://localhost:1337/api/tarefas", {
        headers: {
            Accept: "application/json"
        }
    })
        .then(res => {
            if (res.ok)
                return res.json()
            else
                throw new Error("Resposta chegou, mas não tem o status 200")
        })
        .then((dados) => {
            var listaDoServidor = dados.data.map((elem)=>{
                return elem.DescricaoTarefa;
            });

            setLista(listaDoServidor);

        })
        .catch((err) => {
            console.log("teste: "+err)
        })
 */