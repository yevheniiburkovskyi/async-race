import { ICar } from '../types/types';

class Page {
  createMain() {
    const mainPage = document.createElement('main');
    mainPage.classList.add('race');
    return mainPage;
  }

  createHeader() {
    const header = document.createElement('header');
    header.classList.add('race__header');
    header.innerHTML = `
    <header class="race__header">
      <button class="race__header-garage">To Garage</button>
      <button class="race__header-winners">To Winners</button>
    </header>
    `;
    return header;
  }

  createGenerator() {
    const generator = document.createElement('section');
    generator.classList.add('race__generator');
    generator.innerHTML = `
    <div class="race__generator-create">
      <input type="text" class="race__generator-create-name">
      <input type="color" class="race__generator-create-color" value="#f6b73c">
      <button class="race__generator-create-button">CREATE</button>
    </div>
    <div class="race__generator-update">
      <input type="text" class="race__generator-update-name">
      <input type="color" class="race__generator-update-color" value="#f6b73c">
      <button class="race__generator-update-button">UPDATE</button>
    </div>
    `;
    return generator;
  }

  createGarage(data: ICar[]) {
    const garage = document.createElement('section');
    garage.classList.add('race__garage');
    let cars = '';
    const carsCount = data.length;
    data.forEach((car) => {
      cars += this.createCar(car.name, car.color, car.id);
    });
    garage.innerHTML = `
    <h1 class="race__garage-header">Garage(<span class="race__garage-header-count">${carsCount}</span>)</h1>
    <p class="race__garage-page">Page #<span class="race__garage-page-number">7</span></p>
    <ul class="race__garage-list">
      ${cars}
    </ul>
  `;
    return garage;
  }

  createCar(name: string, color: string, id: number) {
    const car = `
    <li class="race__garage-list-item" id=${id}>
    <div class="race__garage-list-item-header">
      <button class="race__garage-list-item-select"> SELECT </button>
      <button class="race__garage-list-item-remove"> REMOVE </button>
      <span span class="race__garage-list-item-name"> ${name} </span>
    </div>
    <div class="race__garage-list-item-controls">
      <button class="race__garage-list-item-start"> A </button>
      <button class="race__garage-list-item-stop"> B </button>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19" id="car" fill=${color}>
      <path
        d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" />
    </svg>
    <div class="race__garage-list-item-road"> </div>
  </li>
      `;
    return car;
  }
}
export default Page;