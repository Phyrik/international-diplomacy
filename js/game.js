// topBarDiv setup

var homeFlagImg = document.querySelector(".home-flag")
var topBarHeight = homeFlagImg.clientHeight
var topBarDiv = document.querySelector(".top-bar")
var countryNameTitle = document.querySelector(".country-name-title")
var profileButtonImage = document.querySelector(".profile-button-image")
var profileButtonText = document.querySelector(".profile-button-text")
var profileButtonDiv = document.querySelector(".profile-button")
var sideBarDiv = document.querySelector(".side-bar")
var internationalImage = document.querySelector(".side-bar-image")

topBarDiv.style.height = topBarHeight + "px"
countryNameTitle.style.height = (topBarHeight-(topBarHeight/10*9)) + "px"
countryNameTitle.style.lineHeight = topBarHeight + "px"
profileButtonDiv.style.marginRight = (topBarHeight/4) + "px"
profileButtonImage.style.width = (topBarHeight/2) + "px"
profileButtonImage.style.height = (topBarHeight/2) + "px"
sideBarDiv.style.width = internationalImage.clientWidth*1.75 + "px"

var emailParagraph = document.getElementById("email")
emailParagraph.innerHTML = localStorage.getItem("GUserEmail")