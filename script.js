fetch("https://icanhazdadjoke.com/slack")
  .then((response) => response.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement=document.getElementById('hi');
    jokeElement.innerHTML=jokeText;
  });
