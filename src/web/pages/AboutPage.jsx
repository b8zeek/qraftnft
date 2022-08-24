import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from '../components/AnimatedPage'
import AnimatedSection from '@components/AnimatedSection'
import Heading from '@components/Heading'
import Text from '@components/Text'

import ape1 from '@assets/mirko-basic-react-mag.png'
import ape2 from '@assets/milos-rujevic-web-wizzard.png'
import ape3 from '@assets/marko-grudic-marketing-guru.png'

const Member = ({ backgroundImage, name, title, marginRight }) => (
    <TeamMember marginRight={marginRight}>
        <Shader>
            <Mask backgroundImage={backgroundImage} />
        </Shader>
        <NameLabel>{name}</NameLabel>
        <TitleLabel>{title}</TitleLabel>
    </TeamMember>
)

const sections = [
    {
        key: 'the-beginnings',
        animationDelay: 0.3,
        heading: 'The Beginnings',
        description: [
            'We are a team of close friends with multiple skill sets evolving around software creation and advertisement. It all began with several inhouse projects and ideas we had and worked on. Not long after we realised the full potential of this team. Capable of many and without impregnable obstacles! Step by step, app by app, we got a strong head start for our clients.'
        ]
    },
    {
        key: 'history',
        animationDelay: 0.5,
        heading: 'History',
        description: [
            'With a proven history of delivering top-notch quality products and services. We were able to scale the whole process and determine our ideal scenario:',
            '"Leave a mark we could be all proud of!"'
        ]
    },
    {
        key: 'how',
        animationDelay: 0.7,
        heading: 'How?',
        description: [
            'How? By cooperating only with reputable people and companies who are serious about the business with similar mindset as ours:',
            '"Creation of the quality, unique products and user experiences with a high level of attention towards details!"',
            'Sometimes things tend to look hard until we roll up our sleeves, jump into heads first with passion and Strength to overcome any obstacle! If you feel our story in your gutt and need such service, feel free to contact us!'
        ]
    }
]

const teamMembers = [
    {
        name: 'Mirko Basic',
        title: 'Master Blaster',
        backgroundImage: ape1
    },
    {
        name: 'Milos Rujevic',
        title: 'Mad Scientist',
        backgroundImage: ape2
    },
    {
        name: 'Marko Grudic',
        title: 'Con Artist',
        backgroundImage: ape3
    }
]

const AboutPage = () => (
    <AnimatedPage heading='Who are we?' description='Get to know us a bit better'>
        <LeftSide>
            {sections.map(({ key, animationDelay, heading, description }) => (
                <AnimatedSection key={key} delay={animationDelay}>
                    <Heading type='small'>{heading}</Heading>
                    {description.map(desc => (
                        <Text key={desc} size='medium' justify marginBottom='20px'>
                            {desc}
                        </Text>
                    ))}
                </AnimatedSection>
            ))}
        </LeftSide>

        <RightSide initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.9 } }}>
            <Heading type='small'>Meet the TEAM</Heading>
            {teamMembers.map(({ name, title, backgroundImage }, index) => (
                <Member
                    key={name}
                    name={name}
                    title={title}
                    backgroundImage={backgroundImage}
                    marginRight={index % 2 === 0}
                />
            ))}
        </RightSide>
    </AnimatedPage>
)

const LeftSide = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    margin-right: 10%;
`

const RightSide = styled(motion.div)`
    width: 40%;
    display: inline-block;
    vertical-align: top;
`

const TeamMember = styled.div`
    width: calc(47% - 40px);
    display: inline-block;
    vertical-align: top;
    background-color: #4e44ce27;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    margin-bottom: 20px;

    ${({ marginRight }) => marginRight && 'margin-right: 6%;'}
`

const gradient = keyframes`
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
`

const Shader = styled.div`
    width: 100%;
    height: 0;
    position: relative;
    padding-top: 100%;
    background: black;
    background-position: center;
    background-size: 100%;
    mix-blend-mode: color-dodge;
    background: #4b0082;
    background-attachment: fixed;
    background: linear-gradient(
        45deg,
        black,
        #9945ff,
        #f4310e,
        #f58308,
        #14f195,
        #777,
        #3c5e6d,
        #f4310e,
        #9945ff,
        #14f195,
        #14f195
    );
    background-size: 540% 540%;
    animation: ${gradient} 4s ease infinite;
    animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
    border-radius: 50%;
    margin-bottom: 20px;
`

const Mask = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 3px solid #14f195;
    border-radius: 50%;
    background: black;
    background-size: 100%;
    background-position: center;
    mix-blend-mode: multiply;
    ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
    background-repeat: no-repeat;
`

const NameLabel = styled.p`
    line-height: 32px;
    font-size: 22px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin: 0;
`

const TitleLabel = styled.p`
    line-height: 24px;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: rgba(150, 150, 150, 1);
    text-align: center;
    font-style: italic;
    margin: 0;
`

export default AboutPage
