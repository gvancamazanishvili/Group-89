// ვთქვათ, შენი მონაცემები ცვლადშია ან API-დან მოდის
const venues = [    {
        "id": 1,
        "name": "The Gilded Manor",
        "type": "Classic",
        "coordinates": [-73.9857, 40.7484],
        "img": "https://images.unsplash.com/photo-1708606811579-23b18fc48007?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Sophisticated & Grand"
    },
    {
        "id": 2,
        "name": "Windswept Cliffs",
        "type": "Coastal",
        "coordinates": [-122.5107, 37.7739],
        "img": "https://images.unsplash.com/photo-1600714888429-242326b473bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "vibe": "Natural & Moody"
    },
    {
        "id": 3,
        "name": "Iron & Ivy Factory",
        "type": "Industrial",
        "coordinates": [-87.6298, 41.8781],
        "img": "https://images.unsplash.com/photo-1721677337570-5208daa0dabf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Urban & Edgy"
    },
    {
        "id": 4,
        "name": "The Neon Chapel",
        "type": "Modern",
        "coordinates": [-115.1398, 36.1699],
        "img": "https://images.unsplash.com/photo-1758364301801-4940b38170c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Retro & Fun"
    },
    {
        "id": 5,
        "name": "Starlight Vineyard",
        "type": "Rustic",
        "coordinates": [-122.3106, 38.2975],
        "img": "https://images.unsplash.com/photo-1694665759883-e136eceb9997?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Romantic & Earthy"
    },
    {
        "id": 6,
        "name": "The Glass Greenhouse",
        "type": "Boho",
        "coordinates": [-75.1652, 39.9526],
        "img": "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHZlbnVlc3xlbnwwfHwwfHx8MA%3D%3D",
        "vibe": "Botanical & Airy"
    },
    {
        "id": 7,
        "name": "Midnight Library",
        "type": "Vintage",
        "coordinates": [-0.1276, 51.5074],
        "img": "https://images.unsplash.com/photo-1736751402467-3cbcda1c6517?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Intellectual & Dark Academia"
    },
    {
        "id": 8,
        "name": "Cactus Moon Ranch",
        "type": "Desert",
        "coordinates": [-112.0740, 33.4484],
        "img": "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Warm & Minimalist"
    },
    {
        "id": 9,
        "name": "Marble Heights",
        "type": "Modern",
        "coordinates": [-118.2437, 34.0522],
        "img": "https://images.unsplash.com/photo-1733244739141-9fd6c0a75a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "vibe": "Luxurious & Sleek"
    },
    {
        "id": 10,
        "name": "Old Pine Lodge",
        "type": "Rustic",
        "coordinates": [-104.9903, 39.7392],
        "img": "https://images.unsplash.com/photo-1619327603308-87e14f37cf73?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vibe": "Cozy & Traditional"
    },

        {
        "id": 11,
        "name": "Royal palace",
        "type": "Modern",
        "coordinates": [-118.2437, 34.0522],
        "img": "https://images.unsplash.com/photo-1768309638918-fc4be0789e63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHJveWFsJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "vibe": "Luxurious & Sleek"
    },
    {
        "id": 12,
        "name": "Gothic Castle",
        "type": "Rustic",
        "coordinates": [-104.9903, 39.7392],
        "img": "https://images.unsplash.com/photo-1597466609913-e47405096f86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z290aGljJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "vibe": "Gothic & Romantic"
    }

];

const container = document.getElementById('venue-container');

function displayVenues(data) {
    container.innerHTML = data.map(venue => `
        <div class="card">
            <img src="${venue.img}" alt="${venue.name}">
            <div class="card-content">
                <span class="type">${venue.type}</span>
                <h2>${venue.name}</h2>
                <p class="vibe">"${venue.vibe}"</p>
            </div>
        </div>
    `).join('');
}

displayVenues(venues);