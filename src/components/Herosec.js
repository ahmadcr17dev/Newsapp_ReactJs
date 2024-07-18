import React from "react";
import styled from "styled-components";

const Herosec = (props) => {
    return (
        <>
            <Styledsoldier className="card mb-0">
                <h3>History Corner</h3>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">How <strong>Great Britian</strong> Occupied the <strong>Golden Sparrow</strong> with a limit amount of sources</h1>
                            <p className="card-text">The British East India Company, formed in 1600, marked the beginning of British interests in India. Initially, the Company's primary goal was trade, particularly in spices, silk, cotton, and tea. The Company established its first trading post in Surat in 1612, and by the mid-17th century, it had established several other posts along the Indian coast. These trading posts were fortified and served as bases for expanding British influence.</p>
                            <p className="card-text">As the Mughal Empire began to decline in the late 17th and early 18th centuries, the British East India Company saw an opportunity to expand its power. The Company capitalized on the political fragmentation and rivalry among various Indian states and principalities. Through strategic alliances and military interventions, the British steadily increased their control over Indian territories.</p>
                            <p className="card-text">The Battle of Plassey in 1757 was a significant turning point in British ascendancy in India. Led by Robert Clive, the British forces defeated the Nawab of Bengal, Siraj-ud-Daulah, with the help of treachery within the Nawab's camp. This victory gave the British control over Bengal, one of the richest provinces in India, and laid the foundation for further expansion.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </Styledsoldier>
        </>
    );
}

const Styledsoldier = styled.div`
    width: 100%;
    margin-top: 50px;
    padding: 15px 30px 15px 30px;
    border: 0px;
    img {
        width: 800px;
        height: 100%;
    }
    h1 {
        font-family: "poppins", sans-serif;
        font-size: 43px;
        font-weight: 500;
    }
    strong {
        font-weight: 510;
        color: red;
    }
    h3 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 35px;
        font-weight: 500;
        text-decoration: underline;
        margin-bottom: 30px;
    }
    @media (min-width: 0px) and (max-width: 600px) {
        margin: 50px 0px 0px 0px;
        padding: 15px 10px 15px 10px;
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        p {
            font-size: 13px;
        }
    }
    @media (min-width: 601px) and (max-width: 1000px) {
        margin: 50px 0px 0px 0px;
        padding: 15px 10px 15px 10px;
        h1 {
            font-size: 31px;
            margin-bottom: 10px;
        }
        p {
            font-size: 14px;
        }
    }
`;

export default Herosec;