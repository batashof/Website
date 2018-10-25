function sendFormData(data, handleError, handleSuccess) {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }

  fetch("/api/send-mail", {
    method: "POST",
    body: formData
  }).then(res => {
    if (res.status !== 200) {
      return handleError();
    }
    return handleSuccess();
  });
}
export default sendFormData;
