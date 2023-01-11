
function nameMission(array) {
    //***************************************
    //******* ALGORITHME ********************
    //******* ici il faut coder *************
    //***************************************
    return 'ca serai facile';
}


//ne pas toucher après

let test = () => {
    let erreurs = 0;
    let test = 1;
    let result = [];
    [
        [
            [
                "Jupiter",
                "Terre",
            ],
            "J6T4",
        ],
        [
            [

                "Lune",
                "Terre",
                "Soleil",
            ],
            "L3T4S5",
        ],
        [
            [
                "Terre",
                "Mars",
                "Mercure",
            ],
            "T4M3Me5",
        ],
        [
            [
                "Pluton",
                "Mercure",
                "Terre",
                "Mars",
                "Calisto",
            ],
            "P5M6T4Ma2C6",
        ],
    ].forEach(([input, expected]) => {
        if (nameMission(input) === expected) {
            result.push({ 'test n°': test, "resut": 'ok' });
        } else {
            result.push({ 'test n°': test, "resut": ('KO ' + nameMission(input) + ' est differant de ' + expected) });
            erreurs++;
        }
        test++;
    })
    if (erreurs < 1) {
        console.log("Bravo !!!!")
    } else {
        console.log("PAS BON")
        console.table(result);
    }
}

test();