import React from "react";
import QuickLinkCard from "./QuickLinkCard";

const QuickLinks = () => {
    return (
        <div className="quick-link-container row">
            <QuickLinkCard text="Produce" link="/produce" imgSrc="https://c7.alamy.com/zooms/3/963a673be7ef4ddbb5f5f626c405c257/ta31f4.jpg" />
            <QuickLinkCard text="Get in touch" link="/contact" imgSrc="https://c7.alamy.com/zooms/3/a7c41e785a8d49fcb94830e06c6c31ff/m108cn.jpg" />
            <QuickLinkCard text="Find out more" link="/about" imgSrc="https://c7.alamy.com/zooms/3/d3600eb841404bb580dec32114dc2080/htj8j8.jpg" />
        </div>
    );
}

export default QuickLinks;