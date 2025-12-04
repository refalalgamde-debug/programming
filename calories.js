function calculate() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseInt(document.getElementById('activity').value);

    if (!age ||  !height) {
        document.getElementById('error').innerHTML = "يرجى إدخال جميع القيم";
        document.getElementById('error').style.display = "block";
        return;
    }

    let bmr;

    if (gender === "m") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityLevels = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9
    };

    const calories = Math.round(bmr * activityLevels[activity]);

    document.getElementById('error').style.display = "none";
    document.getElementById('result').style.display = "block";
    document.getElementById('result').innerHTML =
        "سعراتك اليومية: " + calories + " سعرة حرارية";
}