import React, { useState } from 'react'
import { useListarElementos } from '../hooks/crudHooks';
import { estadisticaSemanaURL } from '../api/apiurls';

export function PanelEstadisticas(){
    const [graphicsData, setGraphicData] = useState(null);

    useListarElementos(`${estadisticaSemanaURL}`, setGraphicData);

    //console.log(graphicsData)

    return(
        <div className='contenedor'>
            <h1>Hola</h1>
        </div> 
    );
}