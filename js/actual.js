// https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-PT/events

const parties = [];
async function fetchInfo() {
  const response = await fetch(
    'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2405-FTB-ET-WEB-PT/events'
  );
  const json = await response.json();
  const data = json.data;
  console.log(Array.isArray(data));
  await data.forEach((event) => {
    parties.push(event);
  });
  populate();
}
fetchInfo();

function createCard(id, nameText, dateText, locationText, descriptionText) {
  const container = document.querySelector('#indexMain');
  const index = document.createElement('div');
  index.classList.add('card');
  index.classList.add('partyDetails');
  index.id = `partyDetails${id}`;
  container.appendChild(index);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.innerText = nameText;
  index.appendChild(name);

  const date = document.createElement('p');
  date.classList.add('date');
  date.innerText = dateText;
  index.appendChild(date);

  const location = document.createElement('p');
  location.classList.add('location');
  location.innerText = locationText;
  index.appendChild(location);

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = descriptionText;
  index.appendChild(description);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.id = `delete${id}`;
  deleteBtn.innerText = 'Delete';
  deleteBtn.onclick = () => {
    partySelect(id);
  };
  index.appendChild(deleteBtn);
}

function partySelect(id) {
  for (let i = 0; i < parties.length; i++) {
    if (parties[i].id === id) {
      parties.splice(i, 1);
    }
  }
  desamate();
  ``;
  populate();
}

function populate() {
  parties.forEach((event) => {
    createCard(
      event.id,
      event.name,
      event.date,
      event.location,
      event.description
    );
  });
}

function desamate() {
  const container = document.querySelector('#indexMain');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const submitting = document.getElementById('submit');
if (submitting) {
  submitting.addEventListener('click', () => {
    const name = document.getElementById('name');
    const date = document.getElementById('date');
    const location = document.getElementById('location');
    const description = document.getElementById('description');

    const output = {
      id: parties[parties.length - 1].id + 1,
      name: name.value,
      date: date.value,
      location: location.value,
      description: description.value,
    };
    parties.push(output);
    desamate();
    populate();
  });
}

const deleteBtn = document.getElementById;
