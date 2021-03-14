import css from 'styled-jsx/css';

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
        height: 600px;
    }

    #ourStoriesSection {
        background: black;   
        height: 600px;

    }

    #quote2Section {
        background-image: url('/about/aston.png'); 
        height: 600px;
   
    }

    #comingSoonSection {
        background-image: url('/about/aston.png');    
        height: 600px;

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
`;
