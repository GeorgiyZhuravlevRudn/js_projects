const labels=document.querySelectorAll('.form__field label');
labels.forEach(label=>{
        label.innerHTML=label.innerText
                .split('')//splitting to an array of objects
                .map((letter, i)=>`<span style="transition-delay:${i * 30}ms">${letter}</span>`)// each object is a span
                .join('')// join it into a string
})