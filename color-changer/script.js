const btn = document.querySelectorAll('.colorbox');
const body = document.querySelector('body');

btn.forEach(function(colorbox){
    colorbox.addEventListener('click',function(e){
        const color = e.target.getAttribute('data-color')
        body.style.backgroundColor = color;
    });
});
