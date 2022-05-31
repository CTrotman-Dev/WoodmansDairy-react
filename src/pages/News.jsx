import React from "react";

import NewsCardTextLeft from "../components/NewsCardTextLeft";
import NewsCardTextRight from "../components/NewsCardTextRight";

const News = () => {
    return (
        <div className="news-page">
            <h1>News</h1>
            <NewsCardTextLeft title="Your local milkman supporting the community." text="We at Woodman’s dairy are proud to support charities and have helped to raise vital funds for Macmillan cancer support. Your local milkman in Cardiff walked Miles for Macmillan and gave our customers a quick and easy way to support local people affected by cancer. We delivered donation envelopes to all of our customers on our rounds across Cardiff and helped to raise £980.
                To see further details about this, please click here."
                imgSrc="https://c7.alamy.com/zooms/3/31f70256734a41d58d7b4ae88526562c/m1089d.jpg" />
             <NewsCardTextRight title="GO GREEN!" text="At Woodman’s dairy we try to be as eco friendly as possible. See our new fleet of eco friendly vans aswell as our fully electric Milk Float."
                imgSrc="https://c7.alamy.com/zooms/3/4ff98c7070184115adba7c5f4380cf96/m108cj.jpg" />
        </div>
    );
}

export default News;