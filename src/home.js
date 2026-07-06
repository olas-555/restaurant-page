export default function loadHome() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Bella Italia";

    const image = document.createElement("img");
    image.src =
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800";
    image.alt = "Restaurant interior";
    heading.classList.add("hero-title");
    image.classList.add("hero-image"); 

    const paragraph1 = document.createElement("p");
    paragraph1.textContent =
        "Welcome to Bella Italia, where every meal is prepared with fresh ingredients and served with passion.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
        "From handmade pasta to wood-fired pizza, we bring the authentic taste of Italy to your table.";

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
}