fetch('https://api.github.com/orgs/nodejs/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log('NodeJS Public Members: Raw data \n----------');
    console.log(users);
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].login);
    }
  });

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].name);
    }
  });
