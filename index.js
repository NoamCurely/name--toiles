
function nameMission(array) {
    $first = [
        "Jupiter",
        "Terre",
    ];

    $second = [
        "Lune",
        "Terre",
        "Soleil",
    ];

    $third = [
        "Terre",
        "Mars",
        "Mercure",
    ];

    $forth = [
        "Pluton",
        "Mercure",
        "Terre",
        "Mars",
        "Calisto",
    ];

    // var input = document.querySelector("input");
    // const log = document.getElementById("value");

    // input.addEventListener("input", updateValue);

    // function updateValue(e) {
    //     log.textContent = e.target.value;
    // }

    document.body.onload = addElement;

    function addElement() {
        const newDiv = document.createElement("div");
        const newInput = document.createElement("input");
        const newText = document.createElement("p");

        newDiv.appendChild(newInput);
        newDiv.appendChild(newText);

        const current = document.getElementById("div1");
        document.body.insertBefore(newDiv, current)

        newInput.addEventListener("input", e => newText.textContent = e.target.value);
    }

    // if ($first === $input) {
    //     return "j6T4";
    // } else {
    //     if ($second === $input) {
    //         return "L3T4S5";
    //     } else {
    //         if ($third === $input) {
    //             return "T4M3Me5";
    //         } else {
    //             if ($forth === $input) {
    //                 return "P5M6T4Ma2C6";
    //             } else {
    //                 return "étapes invalid !";
    //             }
    //         }
    //     }
    // }
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
        console.log("Bravo !!!!");
    } else {
        console.log("PAS BON");
        console.table(result);
    }
}

test();