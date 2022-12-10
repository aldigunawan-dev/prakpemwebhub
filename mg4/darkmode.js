function darkmode() {
    var element = document.body;
    element.classList.toggle("dark");
    
    document.getElementById("head").classList.toggle("dark-header");

    const chips = document.querySelectorAll('.hero-chips');
    const echtwo = document.querySelectorAll("h2");
    const chip_text = document.querySelectorAll('.chips-text');
    const th = document.querySelectorAll('th');
    const tr = document.querySelectorAll('tr');

    chips.forEach(chip =>{
        chip.classList.toggle('dark-chips');
    })
    chip_text.forEach(text =>{
        text.classList.toggle('dark-a');
    })
    echtwo.forEach(hahdua =>{
        hahdua.classList.toggle('dark-h2')
    })
    th.forEach(th =>{
        th.classList.toggle('dark-th')
    })
    tr.forEach(tr =>{
        tr.classList.toggle('dark-tr')
    })



}