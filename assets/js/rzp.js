const submitRzp = () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var amount = document.getElementById("amount").value;
  if (isBlank(name) || isBlank(email) || isBlank(phone) || isBlank(amount)){
    alert("Enter valid values")
    return
  }
  const endpoint = "https://ap-south-1.aws.data.mongodb-api.com/app/dbmonitor-lpbry/endpoint/rzp"
  var xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status <300) {
      var response = JSON.parse(xhr.responseText);
      window.location.assign(response.message)
    } else {
      console.log("Error: " + xhr.responseText);
      alert(xhr.responseText)
    }
  };
  xhr.send(JSON.stringify({name, email, phone, amount}));
}

const isBlank = (str) => {
    return str.trim()==""
}