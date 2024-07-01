// fetch( 'https://api.themoviedb.org/3/'
//     , {method:'GET' ,
//     headers:{

//      "X-RapidAPI-Key": ' /trending/all/week?api_key=${API_KEY}&language=en-US'

//      }
//  }).then((response)=>{
//      return response.json()

//    }).then((data)=>{
//        console.log(data)
//       })

const base_url = 'https://api.themoviedb.org/3/'
const API_KEY = '0995a55f907c0ff0f4266725916b1a2f';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


fetch(base_url + requests.fetchTrending)
    .then(response => response.json())
    .then(data => {console.log("fetch Trending:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchNetflixOriginals)
    .then(response => response.json())
    .then(data => {console.log("fetch Netflix Originals:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchTopRated)
    .then(response => response.json())
    .then(data => {console.log("fetch Top Rated:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchActionMovies)
    .then(response => response.json())
    .then(data => {console.log("fetch Action Movies :", data.results); showdata(data.results)})

fetch(base_url + requests.fetchComedyMovies)
    .then(response => response.json())
    .then(data => {console.log("fetch Comedy Movies:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchHorrorMovies)
    .then(response => response.json())
    .then(data => {console.log("fetch Horror mOvies:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchRomanceMovies)
    .then(response => response.json())
    .then(data => {console.log("fetch Romance  Movies:", data.results); showdata(data.results)})

fetch(base_url + requests.fetchDocumentaries)
    .then(response => response.json())
    .then(data => {console.log("fetch Document aries:", data.results); showdata(data.results)})

    function fetchrandommovie()
    {
        var getrandompicture =`${base_url}trending/all/week?api_key=${API_KEY}&language=en-US&page=${getrandompage()}`;
        fetch(getrandompicture)
        .then(response => response.json())
        .then (data =>{
            var randomorder =Math.floor(Math.random() * data.results.length);
            var randompicture = data.results[randomorder];
            displayimages(randompicture);
        })
    }
        function getrandompage()
        {
            return Math.floor(Math.random() *20) + 1;
        }
        function displayimages(movie) {
            var background = document.getElementById('background');
            
            var images = document.createElement('img');
            images.src = "https://image.tmdb.org/t/p/original" + movie.poster_path
            background.appendChild(images);
        }
        

        fetchrandommovie();
    

function showdata(products) {
    var items = document.querySelector("#products");

    products.forEach(product => {
        var div = document.createElement("div");
        div.classList.add("product");

        var  name =document.createElement("h2")

        if(product.title)
            {
                name.innerHTML= product.title
            }
            else 
            {
                name.innerHTML=product.original_name
            }

        var img = document.createElement("img");
        // img.src = "https://image.tmdb.org/t/p/original" + product.poster_path

        img.src = `https://image.tmdb.org/t/p/original${product.poster_path}`

        div.appendChild(img);
        div.appendChild(name);

        items.appendChild(div);
    });
}




