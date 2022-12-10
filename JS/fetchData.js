let form = document.querySelector("#form1");
fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data[i]);
      form.innerHTML += `
      <div class="allCard mt-3 mb-3 col-xl-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${response.data[i].avatar}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${response.data[i].first_name} ${response.data[i].last_name}</h5>
            <p class="card-text">${response.data[i].email}</p>
          </div>
        </div>
      </div>
      `;
    }
  });