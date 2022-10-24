const ACCESS_TOKEN =
  "ya29.a0Aa4xrXOJq_Sk4ka8LnE-YchPcWRvzpHc-ALcMkSVdadVyKCDo5mf6fuv4CbfrWiH3oAbNdJMCfv86iKI12LayidAe83LwqwOHIH9k72D4krNVhNz4fltXcxpPgjUAlfGy3Oh7bXVATyxspo8Zu1lrvpThFzEaCgYKATASARASFQEjDvL9TDveH9-HLh79YqVFNFiokg0163";

const SHEET_ID = "1J_aNjBWO4zgRRxmlLdtfC7v4uK8RGXmqd3zxfSCqdDE";
function registrarDatosCivil() {
  const nameLastName = document.getElementById("name").value;
  const nameLastNameF = document.getElementById("namefather").value;
  const nameLastNameM = document.getElementById("namemother").value;
  const sexo = document.getElementById("seleccionSexo").value;
  const lugarNacimiento = document.getElementById("lugar").value;
  const fechaNacimietno = document.getElementById("fecha").value;
  const declaracionPersona = document.getElementById("personaDeclaro").value;

  let data = {};

  let values = [];

  let fila = [
    nameLastName,
    nameLastNameF,
    nameLastNameM,
    sexo,
    lugarNacimiento,
    fechaNacimietno,
    declaracionPersona,
  ];

  values.push(fila);
  data.range = "nuevosregistros";
  data.majorDimension = "ROWS";
  data.values = values;

  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/nuevosregistros:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    }
  ).then(function (response) {
    response.json().then(function (data) {});
  });
  document.getElementById("name").value = "";
  document.getElementById("namefather").value = "";
  document.getElementById("namemother").value = "";
  document.getElementById("lugar").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("personaDeclaro").value = "";
}
