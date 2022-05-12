/*-----------------------------------------------*/
/*----------- Vanilla Js  ---------------------*/
/*----------------------------------------------*/   

const prevBtns = document.querySelectorAll(".btn_previous");
const nextBtns = document.querySelectorAll(".btn_next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll('.form_step');
const progressSteps = document.querySelectorAll(".progress_step")

let formStepNum = 0;

nextBtns.forEach((btn)=> {
    btn.addEventListener("click", () => {
        formStepNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach((btn)=> {
    btn.addEventListener("click", () => {
        formStepNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps(){
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form_step_active") && 
        formStep.classList.remove("form_step_active");
    });

    formSteps[formStepNum].classList.add("form_step_active");
}




function updateProgressbar(){
    progressSteps.forEach((progressStep, idx) => {

        if (idx < formStepNum+1){
            progressStep.classList.add("progress_step_active");
        }else{
            progressStep.classList.remove("progress_step_active");
        }
    });

    const progressActive = document.querySelectorAll(".progress_step_active");

    progress.style.width = 
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


$(window).on('load',function(){
    $('.loader').fadeOut(1000);
    $('.form').fadeIn(1000);
});