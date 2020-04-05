function googleSignOut() {
    localStorage.removeItem("GUserEmail")
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
}