let hiddenTxt = document.querySelector(".hidden-txt");
let showTxt = document.querySelector(".show-txt");

const loopChars = () => {
    let kids = hiddenTxt.textContent;
    let c = 0;

    const addChars = setInterval(() => {
        let span = document.createElement("span");
        span.textContent = kids[c];
        showTxt.appendChild(span);
        // showTxt.textContent = showTxt.textContent + kids[c];
        c++;
        if(c == kids.length)
            clearInterval(addChars);
    }, 300);
}

loopChars();