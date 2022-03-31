import got from 'got';

// const handleReceivedResponse = (response) => {
//   const responseObject = JSON.parse(response.body);
//   console.log(responseObject);
// }

// got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);

// got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
//   const responseObject = JSON.parse(response.body);
//   console.log(responseObject);
// });

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);

    callback(responseObject)
  });
}

fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
});