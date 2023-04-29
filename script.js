"use strict";

const getStartedInput = document.querySelector(".get-started__input");
const getStartedBtn = document.querySelector(".get-started__button")
const getStartedErr = document.querySelector(".get-started__error-handler");

const getAccessInput = document.querySelector(".get-access__input");
const getAccessBtn = document.querySelector(".get-access__button");
const getAccessErr = document.querySelector(".get-access__error-handler");



getStartedBtn.onclick = checkValidationOnGetStarted;
getAccessBtn.onclick = checkValidationOnGetAccess;

function checkValidationOnGetStarted() {
    if (!(getStartedInput.checkValidity() && getStartedInput.value !== "")) {
        getStartedErr.classList.remove("hidden");
        getStartedInput.classList.add("get-started__input--error");
    } else {
        getStartedErr.classList.add("hidden");
        getStartedInput.classList.remove("get-started__input--error");
    }
}

function checkValidationOnGetAccess() {
    if (!(getAccessInput.checkValidity() && getAccessInput.value !== "")) {
        getAccessErr.classList.remove("hidden");
        getAccessInput.classList.add("get-access__input--error");
    } else {
        getAccessErr.classList.add("hidden");
        getAccessInput.classList.remove("get-access__input--error");
    }
}