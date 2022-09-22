

import React from "react"

const Privacy = () => {
    return (

        <div style={{ display: "flex", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "black", flexDirection: "column" }}>

            <div style={{ display: "flex", flexDirection: "row" }}>


                <h1 style={{ color: "white" }}>
                    Privacy Policy
                </h1>
            </div>

            <p style={{ color: "white", marginRight: "30vw", marginLeft: "30vw" }}>

                {"Hello! My name is Evan and I am the sole developer for Insider Trends. I am dedicated to keeping your data safe."}

            </p>

            <p style={{ color: "white", marginTop: "5vh", marginLeft: "30vw", marginRight: "30vw" }}>
                Information Collected: <br></br><br></br> Insider trends does not require any personal information for you to register for the app. In order to provide you with the option to keep track of your favorite stocks we store stocks added to your library in a database. Data collected from this is not used by anyone and can only be viewed by myself. Further, this data is displayed to you by the stocks score. Throughout the app the only data collected is your username, password, stocks you view - not connected to your account, and what stocks you have in your library.

            </p>

            <p style={{ color: "white", marginTop: "5vh", marginLeft: "30vw", marginRight: "30vw" }}>
                Who Gets to See This Data? <br></br><br></br> No one! I am the only person who has access to the database and am adament about keeping your data secur

            </p>

        </div>
    )
}

export default Privacy