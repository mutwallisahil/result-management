import "./TradeSelection.css";
import laptop from "./asset/laptop.jpg";
import robot from "./asset/robot.jpg";
import construction from "./asset/construction.jpg";
import electronics from "./asset/electronics.jpg";

function TradeSelection({
    onSelectTrade,
    onBack
}) {

    return (

        <div className="trade-container">

            {/* back button */}

            <button
                onClick={onBack}
                className="back-button"
            >
                ← Back to Dashboard
            </button>


            <h2>
                Select Your Course
            </h2>


            <div className="trade-cards">


                {/* computer engineering */}

                <div
                    className="trade-card computer"
                    onClick={() =>
                        onSelectTrade(
                            "Computer Engineering"
                        )
                    }
                >

                    <div className="trade-icon">
                        <img src={laptop} alt="laptop" />
                    </div>

                    <h3>
                        Computer Engineering
                    </h3>

                    <p>
                        Computer Engineering Course
                    </p>

                </div>


                {/* aiml engineering */}

                <div
                    className="trade-card aiml"
                    onClick={() =>
                        onSelectTrade(
                            "AIML Engineering"
                        )
                    }
                >

                    <div className="trade-icon">
                        <img src={robot} alt="laptop" />

                    </div>

                    <h3>
                        AIML Engineering
                    </h3>

                    <p>
                        Artificial Intelligence &
                        Machine Learning
                    </p>

                </div>


                {/*electronics engineering */}

                <div
                    className="trade-card elec"
                    onClick={() =>
                        onSelectTrade(
                            "Electronics Engineering"
                        )
                    }
                >

                    <div className="trade-icon">
                        { <img src={electronics} alt="electronics" /> }

                    </div>

                    <h3>
                        Electronics Engineering
                    </h3>

                    <p>
                        Electronics Engineering Course
                    </p>

                </div>


                {/* civil engineering */}

                <div
                    className="trade-card civil"
                    onClick={() =>
                        onSelectTrade(
                            "Civil Engineering"
                        )
                    }
                >

                    <div className="trade-icon">
                        <img src={construction} alt="laptop" />

                    </div>

                    <h3>
                        Civil Engineering
                    </h3>

                    <p>
                        Civil Engineering Course
                    </p>

                </div>


            </div>

        </div>

    );

}


export default TradeSelection;