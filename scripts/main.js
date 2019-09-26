



function makeDomComponent(object) {

let domcomponent = `
<section id="entry${object.id}" value="${object.place.id}">
<div class="inline"><h3>${object.name}</h3><p class="margin"> - </p>
<h4 id="placeName${object.id}">${object.place.name}</h4></div>
<p id="placeDesc${object.id}">${object.description}</p>
<span class="inline"><p>Cost: </p><p id="placeCost${object.id}">${object.cost}</p>
<p>Review: </p><p id="placeReview">${object.review}</p>
</span>
</section>

`;


return domcomponent

}


function getPlacesEntry() {

return fetch(`http://localhost:8088/places`).then(entrieslist => entrieslist.json())
}


getPlacesEntry().then(data => console.log(data));

