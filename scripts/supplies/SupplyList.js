import { useSupplies } from "./SuppliesData.js"
import { Supply } from "./Supply.js"

const contentTarget = document.querySelector(".supplies")

const SupplyList = () => {
    const supplyArray = useSupplies()
    contentTarget.innerHTML = "<h1>Art Supplies</h1>"

    supplyArray.forEach(
        (supplyObject) => {
            contentTarget.innerHTML += Supply(supplyObject)
        }
    );
}
