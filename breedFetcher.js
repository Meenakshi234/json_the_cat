const request = require('request');
const catToSearch = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + catToSearch;
request(url,(error,response,body)=>{
  if (!error && response && response.statusCode) {
    console.log('statusCode:',response && response.statusCode);
    if (body !== '[]') {
      const data = JSON.parse(body);
      console.log(data[0].description);

    } else {
      console.log(`${process.argv[2]} cat does not exists.`);
    }

  } else {
    console.log("Resource is not available");
  }
        
});