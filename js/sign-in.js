function onGoogleSignIn(googleUser) {
    var Gprofile = googleUser.getBasicProfile()
    localStorage.setItem("GUserEmail", Gprofile.getEmail())
    window.location.href = "./game.html"
}