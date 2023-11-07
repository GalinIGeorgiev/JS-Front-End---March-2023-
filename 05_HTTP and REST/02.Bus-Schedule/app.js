function solve() {
    const  arriveBtn= document.getElementById('arrive');
    const  departBtn=document.getElementById('depart');

    const spanInfo= document.querySelector('#info > span');
    

    const BASE_URL= 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextID='depot';

    function depart() {
        departBtn.disabled=true;
        arriveBtn.disabled=false;
        fetch(BASE_URL+nextID)
        .then((res) => res.json())
        .then((nextStop) => {
            const {name ,next}= nextStop
            
            spanInfo.textContent=`Next stop ${name}`;
            nextID=next;
            console
        })
    }

    async function arrive() {
        departBtn.disabled=false;
        arriveBtn.disabled=true;

        fetch(BASE_URL+nextID)
        .then((res) => res.json())
        .then((nextStop) => {
            const {name ,next}= nextStop
            
            spanInfo.textContent=`Arriving at ${name}`;
            
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();