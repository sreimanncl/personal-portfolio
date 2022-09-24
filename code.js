let sectionProject = document.getElementById('project')
sectionProject.style.display = 'none'

const btnCvShow = document.querySelector('.btn-cv-show')
const btnPlatzi = document.querySelector('.btn-platzi')
const btnSt = document.querySelector('.btn-st')


const formulario = document.getElementById('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('box-name').value;
    const email = document.getElementById('box-email').value;
    const country = document.getElementById('box-country').value;
    const web = document.getElementById('box-website').value;
    const msje = document.getElementById('box-msje').value;
    console.log(name, email, country, web, msje)
})
btnCvShow.addEventListener('click', showCv);
btnPlatzi.addEventListener('click', platziBtn)
btnSt.addEventListener('click', stBtn)

function showCv(){
    location.href = "./curriculum.html"
    btnCvShow.target="__blank"

}
function platziBtn(){
    location.href = "https://platzi.com/p/sreimanncl/"
    btnPlatzi.target = '__blank'
}
function stBtn(){
    location.href = "https://www.santotomas.cl/"
    btnSt.target = '__blank'
}