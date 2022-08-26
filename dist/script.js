// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const icon = document.querySelector('#icon');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        icon.classList.add('fa-moon')
        icon.classList.remove('fa-sun')
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon')
    }
});

// Check mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
    icon.classList.add('fa-moon')
        icon.classList.remove('fa-sun')
} else {
    darkToggle.checked = false
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon')
}

// Projects & Skilss
const projects = document.querySelector('#projects');
const skills = document.querySelector('#skills');
const project = document.querySelector('#project');
const skill = document.querySelector('#skill');


projects.addEventListener('click', function () {
        projects.classList.add('bg-white');
        projects.classList.add('dark:bg-slate-900');
        skills.classList.remove('dark:bg-slate-900');
        skills.classList.remove('bg-white');
        project.classList.add('block');
        project.classList.remove('hidden');
        skill.classList.add('hidden');
        skill.classList.remove('block');
});

skills.addEventListener('click', function () {
    projects.classList.remove('dark:bg-slate-900');
    skills.classList.add('dark:bg-slate-900');
    projects.classList.remove('bg-white');
    skills.classList.add('bg-white');
    skill.classList.add('block');
    skill.classList.remove('hidden');
    project.classList.add('hidden');
    project.classList.remove('block');
});


// Back to top
window.onscroll = function () {
    const toTop = document.querySelector('#toTop');
    const mode = document.querySelector('#mode');
    const fixed = mode.offsetTop;

    if (window.pageYOffset > fixed) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}
