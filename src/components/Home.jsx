import React from "react";
import AvatarImage from "../assets/images/avatar.jpeg"; // Import the image

function Home() {
    return (
        <div>
            <img src={AvatarImage} alt="Volodymyr Shtyka"/> {/* Use the imported image */}
            <h1>Volodymyr Shtyka</h1>
            <p>I am a PHP web developer of sites and desktop applications.</p>
            <p>I have more than 5 years experience in this field and more than 50 successfully completed orders of
                various levels of complexity.</p>
        </div>
    );
}

export default Home;