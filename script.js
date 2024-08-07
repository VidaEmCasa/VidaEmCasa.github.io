const listaCards = document.getElementById("cardsList");

document.addEventListener('DOMContentLoaded', () => {
    fetch('dados.json')  // Substitua 'data.json' pela URL do seu arquivo JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('cardsList');
            
            data.forEach((item, index) => {
                // Cria o elemento <li>
                const li = document.createElement('li');

                // Determina a formatação com base na paridade do índice
                if (index % 2 === 0) { // Índice par
                    li.innerHTML = `
                        <div class="card">
                            <div class="texts_left">
                                <h3>${item.Nome}</h3>
                                <p>${item.Descricao}</p>
                            </div>
                            <div class="buton_right">
                                <a href="${item.Link}">Acessar</a>
                            </div>
                        </div>
                    `;
                } else { // Índice ímpar
                    li.innerHTML = `
                        <div class="card">
                            <div class="buton_left">
                                <a href="${item.Link}">Acessar</a>
                            </div>
                            <div class="texts_right">
                                <h3>${item.Nome}</h3>
                                <p>${item.Descricao}</p>
                            </div>
                        </div>                   
                    `;
                }

                // Adiciona o <li> à lista
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
