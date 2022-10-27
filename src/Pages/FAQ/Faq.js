import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='m-5 p-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Choose Us?</Accordion.Header>
                    <Accordion.Body>
                        We have a hard working team who works for ensuring the proper learning of our students.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I Get Lifetime Access of purchased course?</Accordion.Header>
                    <Accordion.Body>
                        Yes. We give you the lifetime access of our every course. You can see any videos again and again when you need.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
};

export default Faq;