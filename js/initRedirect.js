

const pagesRefs = [
    {id: "logo", href: "/"},
    {id: "home", href: "/"},
    {id: "catalogue", href: "#"},
    {id: "advice", href: "#"},
    {id: "about-us", href: "#"}
];

const additionalRefs = [
    {id: "copyright", href: "#"}
];


export const initRedirect = (id, href) => {
    const element = document.getElementById(id);
    element.addEventListener("click", () => {
        if (element) {
            window.open(href, '_blank');
        }
        else {
            console.warn(`Element with id: «${id}» not found`);
        }
    });
};





