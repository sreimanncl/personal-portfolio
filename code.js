let sectionProject = document.getElementById('project')
sectionProject.style.display = 'none'

const btnCvShow = document.querySelector('.btn-cv-show')
const btnCvDownload = document.querySelector('.btn-cv-download')
const btnPlatzi = document.querySelector('.btn-platzi')
const btnSt = document.querySelector('.btn-st')
    btnCvShow.addEventListener('click', showCv);
    btnCvDownload.addEventListener('click', downloadCv);
    btnPlatzi.addEventListener('click', platziBtn)
    btnSt.addEventListener('click', stBtn)

function showCv(){
    let cvShow
    cvShow = document.createElement('a')
    cvShow.href = "./Curriculum.pdf"
    cvShow.target = '_blank'
    btnCvShow.appendChild(cvShow)
    btnCvShow.removeChild(cvShow)
    cvShow.click()
}
function downloadCv() {
    let cvDownload
    cvDownload = document.createElement('a')
    cvDownload.href = './Curriculum.pdf'
    cvDownload.target = '_blank'
    cvDownload.download = 'cv-sebastian-reimann'

    btnCvDownload.appendChild(cvDownload)
    btnCvDownload.removeChild(cvDownload)
    cvDownload.click()
}
function platziBtn(){
    let platzi
    platzi = document.createElement('a')
    platzi.href = 'https://platzi.com/p/sreimanncl/'
    platzi.target = '_blank'
    btnPlatzi.appendChild(platzi)
    btnPlatzi.removeChild(platzi)
    platzi.click()
}
function stBtn(){
    let st
    st = document.createElement('a')
    st.href = 'https://www.santotomas.cl'
    st.target = '_blank'
    btnSt.appendChild(st)
    btnSt.removeChild(st)
    st.click()
}

const sectionContact = document.getElementById('contact');
sectionContact.style.display = 'none';

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
