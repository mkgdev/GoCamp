# GoCamp
GoCamp a site running on Node js  - [heroku](http://www.go-camp.herokuapp.com)

# Configuration to run on local server
> Change the following in app.js

```
function(2000, function(){

console.log("GoCamp server has started");

});


```

# Configuration to run on Cloud  server
> Change the following in app.js

```
function(process.env.PORT, process.env.IP, function(){

console.log("GoCamp server has started");

});

```


# Running the app
```
npm start

```
