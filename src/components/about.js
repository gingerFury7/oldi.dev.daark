import React from "react";
import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import styled from "styled-components";
import { usePersistentStore } from "../store";
import Footer from "./footer";

const About = () => {

    const { team } = usePersistentStore();


    console.log(getSnapshot(team.team));

    return (
        <>
            <AboutContainer>
                <h1>Команда DAARK</h1>
                <AboutTeam>
                    {
                        team.team?.map((e, i) =>
                            <TeamContainer key={i}>
                                <TeamImg src={e.avatar} alt="avatar" />
                                <TeamName className="primaryButtonText">{e.name}</TeamName>
                                <TeamPosition className="tertiaryButtonText">{e.position}</TeamPosition>
                                <TeamStack>
                                    {
                                        e.stack?.map((f, i) =>
                                            <TeamStackImg src={f.img} alt="stack-img" key={i} />
                                        )
                                    }
                                </TeamStack>
                            </TeamContainer>
                        )
                    }
                </AboutTeam>
            </AboutContainer>
            <Footer />
        </>

    )
}

export default observer(About)


const AboutContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    height: fit-content;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const AboutTeam = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

const TeamContainer = styled.div`
    width: 200px;
    height: 350px;
    margin: 1em 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 767px){
        width: 300px
    }
`

const TeamImg = styled.img`
    width: 100%;
    height: 200px;

    @media screen and (max-width: 767px){
        height: 300px;
        width: 300px;
    }
`

const TeamName = styled.div`
    font-weight: bold;
    margin: 4px 0px;
`

const TeamPosition = styled.div`
    margin: 4px 0px;
`

const TeamStack = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 4px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const TeamStackImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px 10px 5px 0px;
    box-shadow: 0px 4px 20px rgba(9, 9, 12, 0.1);
`