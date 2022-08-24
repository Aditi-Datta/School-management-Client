import React, { useState } from 'react'
import Faq from '../Faq/Faq';
import faqImg from '../../../images/qa2-removebg-preview2.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
// import { height } from '@mui/system';

function FaqQuestions() {

    const [faqs, setfaqs] = useState([
        {
            question: "	Do you have the Government approval?",
            answer: 'Yes. Leading Light School & College is approved by the Government of Bangladesh on September 2020.',
            open: true
        },
        {
            question: "What is the full name of the College?",
            answer: 'Leading Light School & College',
            open: false
        },
        {
            question: "College Address?",
            answer: 'TB Gate, Tultikor, Sylhet, Bangladesh.',
            open: false
        },
        {
            question: "	Contact Number?",
            answer: '+88 01720 532169, 01766 857322',
            open: false
        },
        {
            question: "	E-mail Address?",
            answer: 'info@leadinglight.edu.bd',
            open: false
        },
        {
            question: "	Website Address?",
            answer: 'http://www.leadinglight.edu/',
            open: false
        }
    ]);
    const headderStyle = {
        padding: '25px',
        backgroundColor: 'black',
        // backgroundColor: ' #33c8bd',
        display: 'flex',
        justifyContent: 'center',
        color:'white',
        fontWeight:'800',

    };
    const imgStyle = {
        // width: '200px',
        width: '100%',
        height:'100%',
        // margin: '3% auto',
        // height: '200px',
        
        position: 'related',
        marginTop: '5%',
        marginBottom: '2%',

        // paddingLeft:'2%'
        // marginLeft:'5%'
    };
    const faqsStyle = {
        // display: 'flex',
        width: '100%',
        height:'100%',
        marginTop:'5%',
        // marginBottom:'5%',
        // marginLeft:'5%',
        // marginRight:'15%',
        // padding:'5 35px',
        // top, right, bottom, left
        
        alignItems:'center'
    };
    const faqQuestionStyle = {
        marginTop: '0',

        // width:'100%'
        // marginRight:'15%',
        // marginBottom:'15%'
        // position: 'related',
        
    };
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div>
            <Container>
                <Box style={faqsStyle}>
                    <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"  spacing={{ xs: 3, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
                         <Grid  component="div" item  xs={4} sm={6} md={6} style={imgStyle} //data-aos="fade-up"
                        >
                            <img src={faqImg}></img>
                        </Grid>
                        <Grid 
                        // data-aos="fade-up" 
                        // data-aos-easing="ease-out-cubic"
                        // data-aos-duration="2000" 
                        className='faqs' item  xs={4} sm={4} md={6}  component="div" style={faqQuestionStyle}>
                            <h1 className='htag' style={headderStyle}>Frequently Asked Questions</h1>
                            {
                                faqs.map((faq, i) => (
                                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}></Faq>
                                ))
                            }
                        </Grid>

                    </Grid>

                </Box>
           </Container>
        </div>





        // <div className='faqs' style={faqsStyle}>
        //     <div>
        //         <img src={faqImg}></img>
        //     </div>
        //     <div>
        //         <h1 style={headderStyle}>FAQs</h1>
        //         {
        //             faqs.map((faq, i) => (
        //                 <Faq faq={faq} index={i}></Faq>
        //             ))
        //         }
        //     </div>

        // </div >
    )
}

export default FaqQuestions