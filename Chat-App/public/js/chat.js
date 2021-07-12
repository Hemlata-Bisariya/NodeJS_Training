const socket = io();

// Elements
const messageForm = document.querySelector("#message-form");
const messageFormInput = messageForm.querySelector("input");
const messageFormButton = messageForm.querySelector("button");
const sendLocationButtom = document.querySelector("#send-location");
const messages = document.querySelector("#messages");

//Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationMessageTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;
// Options
const { username , room } = Qs.parse(location.search,{ ignoreQueryPrefix : true })
socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
});

socket.on("locationMessage", (message) => {
  console.log(message);
  const html = Mustache.render(locationMessageTemplate, {
    url: message.url,
    createdAt : moment(message.createdAt).format("h:m a")
  });
  messages.insertAdjacentHTML("beforeend", html);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Disable
  messageFormButton.setAttribute("disabled", "disabled");
  // const message = document.querySelector("input").value;
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    //Enable
    messageFormButton.removeAttribute("disabled");
    messageFormInput.value = "";
    messageFormInput.focus();

    if (error) {
      return console.log(error);
    }
    console.log("This message delivered!");
  });
});

sendLocationButtom.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by  your browser");
  }

  sendLocationButtom.setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        sendLocationButtom.removeAttribute("disabled");
        console.log("Location Shared");
      }
    );
  });
});


socket.emit("join", {username , room})