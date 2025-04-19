const signos = [
    { signo: 'Aries', inicio: { mes: 3, dia: 21 }, fin: { mes: 4, dia: 19 } },
    { signo: 'Tauro', inicio: { mes: 4, dia: 20 }, fin: { mes: 5, dia: 20 } },
    { signo: 'Géminis', inicio: { mes: 5, dia: 21 }, fin: { mes: 6, dia: 20 } },
    { signo: 'Cáncer', inicio: { mes: 6, dia: 21 }, fin: { mes: 7, dia: 22 } },
    { signo: 'Leo', inicio: { mes: 7, dia: 23 }, fin: { mes: 8, dia: 22 } },
    { signo: 'Virgo', inicio: { mes: 8, dia: 23 }, fin: { mes: 9, dia: 22 } },
    { signo: 'Libra', inicio: { mes: 9, dia: 23 }, fin: { mes: 10, dia: 22 } },
    { signo: 'Escorpio', inicio: { mes: 10, dia: 23 }, fin: { mes: 11, dia: 21 } },
    { signo: 'Sagitario', inicio: { mes: 11, dia: 22 }, fin: { mes: 12, dia: 21 } },
    { signo: 'Capricornio', inicio: { mes: 12, dia: 22 }, fin: { mes: 1, dia: 19 } },
    { signo: 'Acuario', inicio: { mes: 1, dia: 20 }, fin: { mes: 2, dia: 18 } },
    { signo: 'Piscis', inicio: { mes: 2, dia: 19 }, fin: { mes: 3, dia: 20 } }
  ];
  


function tuSignoEs(fecha){
    let [dia, mes, anio] = fecha.split("-");
    dia = parseInt(dia);
    mes = parseInt(mes)
    
    for (let i = 0; i < signos.length; i++) {
    
        if (
            (mes > signos[i].inicio.mes || (mes == signos[i].inicio.mes && dia >= signos[i].inicio.dia)) && 
            (mes < signos[i].fin.mes || (mes === signos[i].fin.mes && dia <= signos[i].fin.dia))
        ) {
            console.log(`Tu signo es ${signos[i].signo}`);
            break;
        }
    }
}
tuSignoEs("20-05-2001")