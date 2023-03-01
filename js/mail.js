// mail JS

function sendMail() {
  if (
    document.getElementById(`name`).value !== "" &&
    document.getElementById(`email`).value !== ""
  ) {
    let params = {
      name: document.getElementById(`name`).value,
      email: document.getElementById(`email`).value,
      message: document.getElementById(`message`).value,
      phone: document.getElementById(`phone`).value,
      country: document.getElementById(`country`).value,
    };
    const serviceID = "service_0ookowh";
    const templateID = "template_2p6i7bz";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById(`name`).value = "";
        document.getElementById(`email`).value = "";
        document.getElementById(`message`).value = "";
        document.getElementById(`phone`).value = "";
        document.getElementById(`country`).value = "";
      })
      .catch((err) => console.log(err));
  }
}
