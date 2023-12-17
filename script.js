function getCardElement(imgSource, imgAlt, description){
    return `<div class="tab-card">
            <img class="tab-card-image" src="./assets/${imgSource}.png" alt="${imgAlt}">
            <p class="tab-card-description">${description}</p>
            </div>`
}

timeCaption = document.getElementById("caption1")
qualityCaption = document.getElementById("caption2")
accessCaption = document.getElementById("caption3")

timeCaption.addEventListener("click", () => {
    timeCaption.className = "tab-caption selected-tab"
    qualityCaption.className = "tab-caption"
    accessCaption.className = "tab-caption"

    tabsContent = document.getElementById("tabs-content-container")
    tabsContent.removeChild(tabsContent.lastElementChild)
    tabsContent.insertAdjacentHTML("afterbegin", getCardElement(
        "mdi_clock", "clock", "We deliver furniture just in time"
    ))
})


qualityCaption.addEventListener("click", () => {
    qualityCaption.className = "tab-caption selected-tab"
    timeCaption.className = "tab-caption"
    accessCaption.className = "tab-caption"

    tabsContent = document.getElementById("tabs-content-container")
    tabsContent.removeChild(tabsContent.lastElementChild)
    tabsContent.insertAdjacentHTML("afterbegin", getCardElement(
        "arrow_icon", "check", "Our furniture is high quality"
    ))
})

accessCaption.addEventListener("click", () => {
    accessCaption.className = "tab-caption selected-tab"
    timeCaption.className = "tab-caption"
    qualityCaption.className = "tab-caption"

    tabsContent = document.getElementById("tabs-content-container")
    tabsContent.removeChild(tabsContent.lastElementChild)
    tabsContent.insertAdjacentHTML("afterbegin", getCardElement(
        "ic_baseline-phone", "phone", "We are always available"
    ))
})