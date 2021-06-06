const m = document.querySelector("main");

m.addEventListener('wheel', (e) => {
    e.preventDefault();
    if(e.deltaY > 0)
        m.scrollLeft += (m.offsetWidth * 0.55);
    else
        m.scrollLeft -= (m.offsetWidth * 0.55);
});