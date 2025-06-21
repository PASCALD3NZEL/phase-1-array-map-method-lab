const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const specialWords = {
  "oo": "OO",
  "api": "API",
  "nan": "NaN",
  "jsonp": "JSONP",
  "stoppropagation": "StopPropagation",
  "preventdefault": "PreventDefault"
};

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        const lower = word.toLowerCase().replace(/[^a-z]/gi, '');
        if (specialWords[lower]) {
          // preserve punctuation
          return word.replace(new RegExp(lower, 'i'), specialWords[lower]);
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}
