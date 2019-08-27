const fragment = document.createDocumentFragment()

const messageElement = document.createElement('section');
messageElement.classList.add("message");
messageElement.innerText = "You up?";
fragment.appendChild(messageElement);

const messageElement2 = document.createElement('section');
messageElement2.classList.add("message");
messageElement2.innerText = "Yeah";
fragment.appendChild(messageElement2);

const messageElement3 = document.createElement('section');
messageElement3.classList.add("message");
messageElement3.innerText = "You like the fireworks";
fragment.appendChild(messageElement3);

const messageElement4 = document.createElement('section');
messageElement4.classList.add("message");
messageElement4.innerText = "Yes";
fragment.appendChild(messageElement4);

const messageElement5 = document.createElement('section');
messageElement5.classList.add("message");
messageElement5.innerText = "Too bad. It's past your bed time. Go to sleep.";
fragment.appendChild(messageElement5);

document.querySelector("#messages").appendChild(fragment)