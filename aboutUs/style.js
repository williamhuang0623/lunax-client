import css from 'styled-jsx/css';
import { colors, breakpoints } from 'styles/vars';

export const aboutStyle = css`
    #section1 {
        background-image: url(${s3Url}/about/goalsSection.png);
        filter: grayscale(100%);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-color: black;
        height: 100vh;
        width: 100vw;
        position: relative;
    }

    #transitionGradient {
        height: 300px;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.7469362745098039) 25%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.75) 75%,
            rgba(0, 0, 0, 0) 100%
        );
        margin-top: -75px;
        width: 100vw;
        background-size: cover;
        position: relative;
        background-repeat: no-repeat;
        z-index: 12;
    }

    #section2 {
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
        position: relative;
        margin-top: -100px;
    }

    #quoteSection {
        background-image: url(${s3Url}/about/aston.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 600px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        box-shadow: inset 0 0 100px black;
    }

    #ourStoriesSection {
        position: relative;
        margin-bottom: -10px;
        margin-top: -10px;
    }

    #ourStory {
        width: 100vw;
    }

    #quote2Section {
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: row;
    }

    #imageOne {
        background: url(${s3Url}/about/NEWKINOCYBERPUNK.png);
        flex: 1;
        position: relative;
        left: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
    }

    #imageOneHover {
        background: url(${s3Url}/about/NEWKINOCYBERPUNK.png);
        flex: 1;
        position: relative;
        left: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        filter: grayscale(100%);
    }

    #center {
        align-self: center;
    }

    #imageTwo {
        background: url(${s3Url}/about/NEWKINOFLOWERS.png);
        flex: 1;
        height: 600px;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
    }

    #imageTwoHover {
        background: url(${s3Url}/about/NEWKINOFLOWERS.png);
        flex: 1;
        position: relative;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        filter: grayscale(100%);
    }

    #imageThree {
        background: url(${s3Url}/about/NEWKINOLINES.png);
        flex: 1;
        position: relative;
        right: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
    }

    #imageThreeHover {
        background: url(${s3Url}/about/NEWKINOLINES.png);
        flex: 1;
        position: relative;
        right: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        filter: grayscale(100%);
    }

    p {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        color: white;
        font-size: 20px;
        margin-bottom: 1cm;
        margin-top: 1cm;
        text-align: center;
    }

    .image-wrapper {
        padding: 22px;
        cursor: pointer;
    }

    .navigation {
        position: absolute;
        bottom: 50px;
        right: 50px;
    }

    .section {
        display: flex;
        height: 100%;
    }

    .aboutUsSection1 {
        height: 100%;
        width: 880px;
        margin: auto;
        line-height: 1.6;
        align-items: center;
        position: relative;
        justify-content: center;
        display: flex;
        padding: 30px;
    }

    @media (min-width: ${breakpoints.xxl}) {
        #transitionGradient {
            height: 400px;
            background-image: url(${s3Url}/about/fadeIn.png);
            margin-top: -120px;
            width: 100vw;
            background-size: cover;
            position: relative;
            background-repeat: no-repeat;
        }

        #section2 {
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            height: 100vh;
            width: 100vw;
            position: relative;
            margin-top: -100px;
        }

        p {
            font-size: 22px;
        }
    }

    @media (max-width: ${breakpoints.md}) {
        p {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            color: white;
            font-size: 16px;
            letter-spacing: 1px;
        }

        #quoteSection {
            height: 400px;
            width: 100%;
        }

        #quoteSection p {
            padding: 40px 20px;
        }

        .navigation {
            display: none;
        }
    }

    @media (max-width: ${breakpoints.xs}) {
        #quote2Section {
            display: block;
        }

        #imageOneHover,
        #imageTwoHover,
        #imageThreeHover,
        #imageOne,
        #imageTwo,
        #imageThree {
            width: 100%;
            height: 300px;
        }

        #section1 {
            background-image: url(${s3Url}/about/mobile_bg_2.png);
        }

        #quoteSection {
            background-image: url(${s3Url}/about/mobile_quote_bg.png);
        }
    }
`;
