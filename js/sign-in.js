function googleSignOut() {
    localStorage.removeItem("GUserEmail")
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
}

function onGoogleSignIn(googleUser) {
    var Gprofile = googleUser.getBasicProfile()
    localStorage.setItem("GUserEmail", Gprofile.getEmail())
}