const quotes = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie. - Sénèque",
    "La vie est ce qui arrive quand on avait prévu autre chose. - John Lennon",
    "Chaque jour est une vie. Chaque réveil et chaque lever sont des naissances nouvelles. - Daniel Pennac",
    "Il n'est jamais trop tard pour être ce que vous auriez pu être. - George Eliot"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}
