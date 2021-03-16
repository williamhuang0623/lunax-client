import css from 'styled-jsx/css';
import { colors } from '../styles/vars';

export const aboutStyle = css`
    #section1 {
        background-image: url('/about/goalsSection.png');
        filter: grayscale(100%);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-color: black;
        height: 100vh;
        width: 100vw;
        box-shadow: inset 0 0 100px black;
    }

    #section2 {
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;        
    }

    #quoteSection {
        background-image: url('/about/aston.png');    
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 600px;
        display: flex;
        justify-content: center; 
        align-items: center; 
        box-shadow: inset 0 0 100px black;
    }

    #ourStoriesSection {
        background-image: url('/about/ourStory.png');    
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 600px;

    }

    #quote2Section {
        background-image: url('/about/aston.png'); 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 600px;
    }

    #aston1 {
        background: url(/about/aston3.png);
        width: 34%;
        position: absolute;
        left: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
     }

     #aston1Hover {
        background: url(/about/aston3.png);
        width: 34%;
        position: absolute;
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


     #aston2 {
        background: url(/about/aston2.png);
        width: 33%;
        position: absolute;
        right: 33%;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
     }

     #aston2Hover {
        background: url(/about/aston2.png);
        width: 33%;
        position: absolute;
        right: 33%;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        filter: grayscale(100%);
     }


     #starWars {
        background: url(/about/starWars.png);
        width: 33%;
        position: absolute;
        right: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
     }

     #starWarsHover {
        background: url(/about/starWars.png);
        width: 33%;
        position: absolute;
        right: 0px;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        filter: grayscale(100%);

     }

    #comingSoonSection {
        background-image: url('/home/chess.png');    
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 600px;
        position: relative;
        top: 50%;
    }

    .coming-soon-ticker {
        font-size: 20px;
        color: ${colors.pureWhite};

    }

    .comingSoonSection {
        position: relative;
        
    }

    .coming-soon-ticker h1 {
        margin: 0;
        padding: 8px 0;
        border-top: 2px solid ${colors.pureWhite};
        border-bottom: 2px solid ${colors.pureWhite};
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        color: white;
        font-size: 25px;
        margin-bottom: 1cm;
        margin-top: 1cm;
    }

    .image-wrapper {
        padding: 22px;
    }

    .navigation {
        position:absolute;
        bottom:0;
        right:0;
        scroll-behavior: smooth;

    }

    main {
        scroll-behavior: smooth;
    }

    .goals {
        display: flex;
        position: absolute;
    }

    .left {
        padding: 40px;
    }

    .right {
        padding: 15px;
        margin-top: 25px;
    }

    footer {
        position: absolute;
        bottom: 0;
        padding: 22px;
        padding-left: 0;
        display: flex;
        align-items: center;
    }
    .footer-links {
        list-style-type: none;
        display: flex;
    }
    .footer-links a {
        text-decoration: none;
    }
    .footer-links a,
    .footer-links li {
        font-size: 12px;
        color: ${colors.pureWhite};
    }



`;
