


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