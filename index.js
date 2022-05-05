// Add your code here
const submitData = (nm, eml) => {
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify ({name: nm, email: eml}),
  };

  return fetch ('http://localhost:3000/users', configurationObject)
    .then (function (response) {
      return response.json ();
    })
    .then (function (object) {
      document.body.innerHTML = object.id;
    })
    .catch (function (error) {
      document.body.innerHTML = 'Unauthorized Access';
    });
};
submitData ('sara', 'sara@example.com');
