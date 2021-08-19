export const Supply = (supplyObject) => {
    return `
        <section class="supply">
            <h2 class="supply__type">${supplyObject.type}</h2>
            <div class="supply__price">
                Price: ${supplyObject.price}
            </div>
        </section>
    `
}
