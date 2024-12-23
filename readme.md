# Meu Portfólio - React

Este é um portfólio interativo desenvolvido com React, onde você pode adicionar e remover projetos dinamicamente. O portfólio também possui um botão para alternar entre o tema escuro e claro.

## Funcionalidades

- **Tema Escuro/Claro**: Alterna entre o tema escuro e o tema claro para proporcionar uma experiência visual agradável.
- **Adição de Projetos**: Adicione projetos com título e descrição que ficam visíveis na seção "Meus Projetos".
- **Remoção de Projetos**: Remova projetos da lista a qualquer momento.
- **Responsividade**: O design é responsivo, funcionando bem em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **ReactDOM**: Biblioteca necessária para renderizar o React no navegador.
- **Bootstrap 5**: Framework CSS para um design responsivo e visualmente agradável.
- **Google Fonts**: Fontes personalizadas para o estilo do portfólio.
- **Babel**: Transpila o código JSX para JavaScript compatível com os navegadores.

## Estrutura do Projeto

- **HTML**: Estrutura básica da página e inclusão de scripts.
- **CSS**: Estilos personalizados para o tema escuro/claro, animações de hover, e design de cartões.
- **React Components**:
  - `App`: Componente principal que gerencia o tema e os projetos.
  - `ProjectForm`: Formulário para adicionar novos projetos.

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/meu-portfolio.git
    ```

2. Abra o arquivo `index.html` em um navegador.

3. Você verá o portfólio com a opção de alternar o tema e adicionar projetos.

## Personalização

- **Imagem do Perfil**: Troque a imagem do perfil para a sua.
    ```html
    <img src="B7EE60D2-D735-4286-A78E-E7F594FDF165.jpeg" alt="Minha foto" class="profile-img mb-4" />
    ```
  Substitua o caminho da imagem para a sua própria foto.

- **Habilidades**: A lista de habilidades pode ser personalizada facilmente no código JSX.
    ```javascript
    {["HTML", "CSS", "JavaScript"].map((skill) => (
        <div key={skill} className="col-md-4">
            <div className="card p-4">
                <h5>{skill}</h5>
                <p>
                    {skill === "HTML"
                        ? "Estruturo páginas web."
                        : skill === "CSS"
                        ? "Crio o design das páginas."
                        : "Faço as páginas ficarem interativas."}
                </p>
            </div>
        </div>
    ))}
    ```

- **Seção de Projetos**: Para adicionar mais funcionalidades ou campos de entrada, basta editar o componente `ProjectForm`.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
