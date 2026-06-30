'use client';

import {getItensMenu, IMG_URL} from "@/api/api";
import {useEffect, useState} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomCard from "../components/CustomCard";

export default function Home() {
   const [dadosMenu, setDadosMenu] = useState([]);

   useEffect(async () => {
      let dados = await getItensMenu();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDadosMenu(dados);
   }, []);

   const htmlMenu = dadosMenu.map((item) => {
      return(<CustomCard key={item.id} item={item} />);
   });

   return <>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
         {htmlMenu}
      </div>

   </>;
}
