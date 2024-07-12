function logout() {
    window.location.replace("1login.html"); 
}

document.getElementById('Logout').addEventListener('click', function() {
    logout();
    alert("logout succesfully");
});