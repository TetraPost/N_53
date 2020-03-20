const form = document.forms.formTest;
const btn = document.querySelector('.specialBtn');
const respTxt = document.querySelector('.resttext');
const userAddedTxt = document.querySelector('.userAddedTxt');
const userList = document.querySelector('.userList');

async function loadData(data) {
  try {
    const response = await axios.post('postData', data);
    const dataRes = response.data;
    if (dataRes.valid) {
      form.name.value = '';
      userAddedTxt.innerText = dataRes.userName.userName;
      const reslist = await getList(dataRes);
      userList.innerHTML = reslist;
    } else {
      userAddedTxt.innerText = '';
    }
    respTxt.innerText = dataRes.status;
    btn.classList.remove('disabled');
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.classList.add('disabled');
  const data = new FormData(form);
  loadData(data);
});

function getList(dataRes) {
  let temp = '';
  for (let i = 0; i < dataRes.userList.length; i++) {
    temp += `${[i]} - ${dataRes.userList[i].name} </br>`;
  }
  return temp;
};
