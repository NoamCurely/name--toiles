function code() {
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

    $input = [
        "value1",
        "value2",
        "value3",
        "value4",
        "value5"
    ];

    if ($first === $input) {
        return "j6T4";
    } else {
        if ($second === $input) {
            return "L3T4S5";
        } else {
            if ($third === $input) {
                return "T4M3Me5";
            } else {
                if ($forth === $input) {
                    return "P5M6T4Ma2C6";
                } else {
                    return "étapes invalid !";
                }
            }
        }
    }   
}