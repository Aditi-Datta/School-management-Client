import React from "react";




const Faq = ({ faq, index, toggleFAQ }) => {

    const faqStyle = {
        margin: '5px',
        // padding: '15px',
        backgroundColor: 'white',
    };

    const questionStyle = {
        fontSize: '22px'
        // position: 
    };
    // let questionStyle:: after = {

    // }
    const answerStyle = {
        fontSize: '18px',
        // opacity: 0,
        // maxHeight: 0,
        // overflowY: 'hidden'

    };
    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            style={faqStyle}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question" style={questionStyle}>
                {faq.question}
            </div>
            <div className="faq-answer" style={answerStyle}>
                {faq.answer}
            </div>


        </div>
    );
};
export default Faq;

