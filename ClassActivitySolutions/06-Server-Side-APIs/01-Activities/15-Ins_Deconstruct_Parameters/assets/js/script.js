fetch('https://api.github.com/gists/public?since=2021-06-01&per_page=10')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  // 26.6 kB ==> 5.2kb
  // 1.2 seconds => .066 s