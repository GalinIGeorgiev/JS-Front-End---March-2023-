function invetory(input){
    let heroes=[];
    for (const hero of input) {
        let heroTokens= hero.split(' / ');
        let heroCurrent={name:heroTokens[0], level:heroTokens[1],items:heroTokens.slice(2)};
        heroes.push(heroCurrent);
    }
    heroes.sort((a,b)=> a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
    }
}


invetory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
        ]
        
)