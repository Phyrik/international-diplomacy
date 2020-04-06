function onGoogleSignIn(googleUser) {
    const urlParams = new URLSearchParams(window.location.search)
    const signOutParam = urlParams.get("sign-out")
    if (signOutParam == "true") {
        googleSignOut()
        return
    }
    var Gprofile = googleUser.getBasicProfile()
    sessionStorage.setItem("GUserID", Gprofile.getId())
    sessionStorage.setItem("GUserEmail", Gprofile.getEmail())
    window.location.href = "./game.html"
}

function googleSignOut() {
    sessionStorage.removeItem("GUserID")
    sessionStorage.removeItem("GUserEmail")
    var auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut()
    console.log("signed out")
    window.location.href = "./sign-out.html"
}