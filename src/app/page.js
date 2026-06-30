'use client';





import {getItensMenu} from "@/api/api";
import {useEffect} from "react";

export default function Home() {
   useEffect(async () => {
      let dados = await getItensMenu();
      console.log(dados);
   }, []);

   return <></>;
}
