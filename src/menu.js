export default function loadMenu() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const menuItems = [
        {
            name: "Margherita Pizza",
            description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
        },
        {
            name: "Spaghetti Carbonara",
            description: "Creamy pasta with pancetta, parmesan, and egg.",
        },
        {
            name: "Lasagna",
            description: "Layers of pasta, beef, tomato sauce, and melted cheese.",
        },
        {
            name: "Tiramisu",
            description: "Traditional Italian coffee-flavored dessert.",
        },
    ];

    content.appendChild(heading);

    menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");  

        const name = document.createElement("h2");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        itemDiv.appendChild(name);
        itemDiv.appendChild(description);

        content.appendChild(itemDiv);
    });
}