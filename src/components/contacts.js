import React from "react";
import styled from "styled-components";
import IPhone from "./iPhone/iPhone";

const Contacts = () => {

    return (
        <ContactsContainer>
            <IPhone bgcolor={'#F2F2F7'}/>
        </ContactsContainer>
    )
}

const ContactsContainer = styled.div`
    width: 70%;
    height: 110vh;
    margin: 90px auto;
`

export default Contacts;