var currentTime = new Date().getHours();
var greeting;

if (currentTime >= 5 && currentTime < 12) {
    greeting = 'Hello new day!';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = 'ReloEngine cool?🤔!';
  } else if (currentTime >= 18 || currentTime < 5) {
    greeting = 'Cool day🎉';
  } else {
    greeting = 'Chmoki!';
  }

document.write("<h1 class='textwelcome'>" + greeting + "</h1>");
