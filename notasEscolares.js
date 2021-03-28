const score = 90;
const scores = [
    {value: score >= 90 && score <= 100 && "A"},
    {value: score >= 80 && score <= 89 && "B"},
    {value: score >= 70 && score <= 79 && "C"},
    {value: score >= 60 && score <= 69 && "D"},
    {value: score < 60 && score >= 0 && "F"},
    {value: (score < 0 || score > 100) && "Nota inválida"},
];

scores.forEach(score => score.value && console.log(`Sua nota é: ${score.value}`));