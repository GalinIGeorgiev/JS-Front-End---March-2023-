function getInfo() {
    let inputValue= document.getElementById('stopId');
    let parentDivOutput= document.getElementById('stopName');
    let parentUlOutput= document.getElementById('buses');
   
    const BASE_URL= 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopId=inputValue.value; 
    
    parentUlOutput.innerHTML='';
    parentDivOutput.innerHTML='';

    fetch(`${BASE_URL}${stopId}`)
    .then((res)=> res.json())
    .then((busInfo) => {
        const { name , buses}= busInfo;
        parentDivOutput.textContent=name;

        
        for (const bus in buses) {
            let list= document.createElement('li');
            list.textContent=`Bus ${bus} arrives in ${buses[bus]} minutes`
            parentUlOutput.appendChild(list);
        }
    })
    .catch((err) =>{
        parentDivOutput.textContent='Error';
    })
}