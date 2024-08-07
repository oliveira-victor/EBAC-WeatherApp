import styled from "styled-components";
import { fonts } from "../../styles/fonts";

const aboutColors = {
    dark: "#10001f",
    light: 'rgba(247, 247, 249, 1)'
}

export  const Div = styled.div`
/* BODY, HEADER e FOOTER*/
body {
    /* background-color: gray; */
    margin: 0;
    font-family: ${fonts.main};
    width: 100%;
}
header,
footer {
    background-color: ${aboutColors.light};
    border-radius: 30px;
    width: 85%;
    margin: 36px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header {
    height: 100px;
}
footer {
    height: 190px;
    flex-direction: column;
    justify-content: space-between;
}
.logo {
    height: 65px;
    margin-left: 130px;
}
.menu {
    margin-right: 130px;
}
.path {
    display: flex;
    text-align: center;
    margin-top: 45px;
    font-family: ${fonts.third};
    font-size: smaller;
    height: 24px;
    align-content: center;
    justify-content: center;
}
.path a {
    color: ${aboutColors.dark};
}
.navLink {
    display: block;
    margin-top: 38px;
    text-align: center;
    font-size: 12px;
    color: #10001F;
    margin-bottom: 20px;
}
h1 {
    text-align: center;
    font-weight: 600;
}
main h2 {
    width: 75%;
    margin: 20px auto;
    text-align: center;
    font-weight: 600;

    @media (max-width: 767px) {
        font-size: 20px;
        width: 100%;
    }
}
a {
    text-decoration: none;
}
.about {
    font-weight: 800;
    text-decoration: underline;
}
/* GRID-CARDS */
#grid-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    margin: 60px auto 0;
    width: fit-content;
    gap: 50px;

    @media (max-width: 1161px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
.card {
    width: 18rem;
    height: 18rem;
    font-family: ${fonts.third};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease-in, box-shadow 0.3s ease;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}
.card-content {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
}
.card-content h2 {
    width: fit-content;
    padding: 0 5px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-7px);
}
.name {
    border-radius: 12px 12px 12px 0;
}
.function {
    border-radius: 0 0 9.2px 9.2px;
}
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 800ms ease-in-out;
}
.img-grad {
    opacity: 0;
}
.card a {
    position: absolute;
    margin: 0;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease;
}
.name,
.function {
    position: absolute;
    font-family: ${fonts.main};
    color: ${aboutColors.dark};
    text-transform: uppercase;
    left: 30px;
    transition: all 500ms ease;
}
.name {
    top: 221px;
    font-weight: 700;
    font-size: 16px;
}
.function {
    top: 245px;
    font-weight: 600;
    font-size: 12px;
    opacity: 0.8;
}
.card p {
    position: absolute;
    top: 50px;
    left: 30px;
    opacity: 0;
    transition: opacity 500ms ease;
}
.card:hover .name,
.card:hover .function {
    color: ${aboutColors.light};
    background-color: transparent;
}
.card:hover .name {
    top: 5%;
}
.card:hover .function {
    top: 0;
}
.card:hover p {
    opacity: 1;
}
.card:hover .img-grad {
    opacity: 1;
}
.card:hover .img-clean {
    opacity: 0;
}
.tag {
    padding: 8px 16px;
    color: ${aboutColors.dark};
    background-color: rgba(247, 247, 249, 0.5);
    border-radius: 16px;
    display: inline-flex;
    margin-top: 8px;
    margin-right: 6px;
}
.icon-whatsapp,
.icon-linkedin,
.icon-behance,
.icon-github {
    width: 24px;
    height: 24px;
    position: absolute;
    bottom: 12px;
}
.icon-whatsapp {
    right: 12px;
}
.icon-linkedin {
    right: 44px;
}
.icon-github,
.icon-behance {
    right: 76px;
}
footer {
    flex-direction: column;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 50px;
}
.info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
}
.links img {
    height: 30px;
}
.logo-footer {
    margin-right: auto;
    margin-left: 38px;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-right: 38px;
}
.links a {
    color: ${aboutColors.dark};
}
.links a:hover {
    text-decoration: underline;
}
.trademark {
    margin-bottom: 17px;
    font-size: smaller;
}
.social {
    display: flex;
    width: 90%;
    justify-content: end;
    gap: 5px;
    margin-top: 15px;
}
.social img {
    height: 30px;
}
`
