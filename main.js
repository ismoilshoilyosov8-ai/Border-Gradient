let all = document.querySelector(`.all`);
let tl = document.querySelector(`.tl`);
let tr = document.querySelector(`.tr`);
let br = document.querySelector(`.br`);
let bl = document.querySelector(`.bl`);
let bc = document.querySelector(`.bc`);
let block = document.querySelector(`.block`);
styles = {
    all: 0,
    tl: 0,
    tr: 0,
    br: 0,
    bl: 0,
    bc: 0
};
function myfunc() {
    block.innerHTML =`
    border-radius: ${styles.all}px;<br/>
    border-top-left-radius: ${styles.tl}px;<br/>
    border-top-right-radius: ${styles.tr}px;<br/>
    border-bottom-right-radius: ${styles.br}px;<br/>
    border-bottom-left-radius: ${styles.bl}px;<br/>
    background-color: ${styles.bc};
    `
}   
all.addEventListener(`input`, () => {
    styles.all = all.value;
    block.style.borderRadius = `${styles.all}px`;
    myfunc();
});
tl.addEventListener(`input`, () => {
    styles.tl = tl.value;
    block.style.borderTopLeftRadius = `${styles.tl}px`;
    myfunc();
});
tr.addEventListener(`input`, () => {
    styles.tr = tr.value;
    block.style.borderTopRightRadius = `${styles.tr}px`;
    myfunc();
});
br.addEventListener(`input`, () => {
    styles.br = br.value;
    block.style.borderBottomRightRadius = `${styles.br}px`;
    myfunc();
});
bl.addEventListener(`input`, () => {
    styles.bl = bl.value;
    block.style.borderBottomLeftRadius = `${styles.bl}px`;
    myfunc();
});
bc.addEventListener(`input`, () => {
    styles.bc = bc.value;
    block.style.backgroundColor = `${styles.bc}`;
    myfunc();
});