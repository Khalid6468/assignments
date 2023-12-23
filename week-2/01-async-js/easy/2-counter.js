let tick = 0;
function f() {
    console.log(tick);
    tick++;
    setTimeout(()=>{
        f();
    }, 1000)
}

f();