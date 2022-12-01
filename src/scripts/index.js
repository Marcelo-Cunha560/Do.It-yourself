function showLoginModal(){
    const body = document.querySelector('body');
    const loginBtn = document.querySelector('#loginBtn')

    loginBtn.addEventListener('click', (event) => {
        const modal = createModal()
        
        body.appendChild(modal)
        closeModal()
    })
}

function createModal() {
    const section = document.createElement('section')
    const form = document.createElement('form')
    const title = document.createElement('h2')
    const closeButton = document.createElement('span')
    const EmailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    const passwordLabel= document.createElement('label')
    const passwordInput = document.createElement('input')
    const buttonSubmit = document.createElement('button')

    section.classList.add('modal__container');
    form.classList.add('modal__form')
    
    title.innerText = 'Bem vindo de volta'
    
    closeButton.innerText = 'x'
    closeButton.id = 'closeBtn'

    EmailLabel.htmlFor = 'email'
    EmailLabel.innerText= 'Email'
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.type = 'text'
    emailInput.placeholder = 'Digite seu melhor email'

    passwordLabel.htmlFor = 'password'
    passwordLabel.innerText = 'Senha'
    passwordInput.name = 'password'
    passwordInput.id = 'password'
    passwordInput.placeholder = '********'

    buttonSubmit.type = 'submit'
    buttonSubmit.id = 'subBtn'
    buttonSubmit.innerText = 'Entrar'

    form.append(title, closeButton, EmailLabel, emailInput, passwordLabel, passwordInput, buttonSubmit)
    section.appendChild(form)


    return section
}

function closeModal(){
    const modal__container = document.querySelector('.modal__container')
    const closeModalBtn = document.querySelector('#closeBtn')

    closeModalBtn.addEventListener('click', () => {
       modal__container.remove() 
    })
}
 
showLoginModal()