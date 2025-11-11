const accessKey="r4wOhD190JOWFQqsf33Qj68OWIKE8RemyrayojLaS9s";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function searchImages() {
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey} `;
    
    const repsonse=await fetch(url);
    const data = await repsonse.json();

    const results=data.results;
    results.map((result)=>{
        image.src=results
    })
}
searchForm.addEventListener("submit",(e)=>{

    e.preventDefault();
    page=1;
    searchImages();
})
