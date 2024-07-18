function displayName(){
    var name = document.getElementById('nameInput').value;
    var nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = 'Hello, ' + name + '!';
}