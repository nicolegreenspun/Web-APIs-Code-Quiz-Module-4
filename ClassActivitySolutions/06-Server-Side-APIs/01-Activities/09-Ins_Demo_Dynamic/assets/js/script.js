var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //creating the element
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');

        //update the element
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;

        // attaching that element so that it actually appears
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    });
}

fetchButton.addEventListener('click', getApi);
