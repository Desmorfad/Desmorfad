// Aquí puedes escribir tu código JavaScript
console.log('El script se está ejecutando en la página');

(async function() {
    'use strict';

    window.onload = () => {
        const makeId = function(length = 7) {
            return `list-${(Math.random() + 1).toString(36).substring(length)}`;
        }
        
        const listId = makeId();
        const datalist = document.createElement('datalist');
        datalist.id = listId;
        for(const product of products){
            const option = document.createElement('option');
            option.value = product;
            datalist.appendChild(option);
        }
        document.body.appendChild(datalist);
        const adForInputs = document.querySelectorAll('.adfor');
        for(const input of adForInputs){
            input.setAttribute('list', listId);

        }

        // Función para copiar al portapapeles y borrar el contenido
        const copiarYBorrar = () => {
            // Selecciona el contenido del input
            const inputEmpresa = document.getElementById('inputEmpresa');
            inputEmpresa.select();
            // Copia el contenido al portapapeles
            document.execCommand('copy');
            // Borra el contenido del input
            inputEmpresa.value = '';
            // Alerta para confirmar que se ha copiado
            // alert('Contenido copiado y borrado.');
        };

        // Agrega el evento de clic al botón
        const botonCopiarBorrar = document.getElementById('botonCopiarBorrar');
        botonCopiarBorrar.addEventListener('click', copiarYBorrar);
    }
})();
document.addEventListener("keyup", e=>{

  
  
        document.querySelectorAll(".text").forEach(Text =>{
  
          Text.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?Text.classList.remove("filtro")
              :Text.classList.add("filtro")
        })
  


    }
)();


const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector(
	'.container-suggestions'
);

const searchLink = document.querySelector('a');

inputSearch.onkeyup = e => {
	let userData = e.target.value;
	let emptyArray = [];

	if (userData) {
		emptyArray = suggestions.filter(data => {
			return data
				.toLocaleLowerCase()
				.startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map(data => {
			return (data = `<li>${data}</li>`);
		});
		searchContainer.classList.add('active');
		showSuggestions(emptyArray);

		let allList = boxSuggestions.querySelectorAll('li');

		allList.forEach(li => {
			li.setAttribute('onclick', 'select(this)');
		});
	} else {
		searchContainer.classList.remove('active');
	}
};

function select(element) {
	let selectUserData = element.textContent;
	inputSearch.value = selectUserData;

	searchLink.href = `https://www.google.com/search?q=${inputSearch.value}`;
	searchContainer.classList.remove('active');
}

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
	}
	boxSuggestions.innerHTML = listData;
};


