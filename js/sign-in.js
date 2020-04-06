function onGoogleSignIn(googleUser) {
    const urlParams = new URLSearchParams(window.location.search)
    const signOutParam = urlParams.get("sign-out")
    if (signOutParam == "true") {
        googleSignOut()
        return
    }
    var Gprofile = googleUser.getBasicProfile()
    localStorage.setItem("GUserEmail", Gprofile.getEmail())
    window.location.href = "./game.html"
}

function googleSignOut() {
    localStorage.removeItem("GUserEmail")
    var auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut()
    console.log("signed out")
    window.location.href = "./sign-out.html"
}