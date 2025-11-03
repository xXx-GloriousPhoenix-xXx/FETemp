const loadLabList = (currentLab) => {
    const labCount = 9;

    const labList = document.getElementById("lablist");

    for (let labNumber = 1; labNumber <= labCount; labNumber++) {
        const labLink = document.createElement('a');
        labLink.href = `./lab${labNumber}.html`;
        labLink.textContent = `Практична №${labNumber}`;
        labLink.classList.add('link');

        const labLinkWrapper = document.createElement('div');
        labLinkWrapper.classList.add('wrapper', 'link');

        if (labNumber === currentLab) {
            labLinkWrapper.classList.add('active');
        }

        labLinkWrapper.appendChild(labLink);
        labList.appendChild(labLinkWrapper);
    }
}
