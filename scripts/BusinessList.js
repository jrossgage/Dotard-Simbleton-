import { getBusinessData } from "./BusinessData.js";
import { Business } from "./Business.js";

const businessArr = getBusinessData();

export const BusinessList = () => {

    const contentElement = document.querySelector(".business")
    contentElement.innerHTML = `<h1>Active Businesses<h1>`



    businessArr.forEach(business => {
        contentElement.innerHTML += Business(business);
    })
}

export const NewYorkBusinessList = () => {

    const contentElement = document.querySelector(".businessList--newYork");
    contentElement.innerHTML = `<h1>New York Businesses<h1>`;

    const filteredBusinessArr = businessArr.filter(business =>
        business.addressStateCode === "NY");

    filteredBusinessArr.forEach(business => {
        contentElement.innerHTML += Business(business);
    })
}

export const ManufacturingBusinessList = () => {

    const contentElement = document.querySelector(".businessList--manufacturing");
    contentElement.innerHTML = `<h1>Manufacturing Businesses<h1>`;

    const filteredBusinessArr = businessArr.filter(business =>
        business.companyIndustry === "Manufacturing");

    filteredBusinessArr.forEach(business => {
        contentElement.innerHTML += Business(business);
    })
}

export const PurchasingAgentList = () => {

    const contentElement = document.querySelector(".agents");
    contentElement.innerHTML = `<h1>Purchasing Agents<h1>`;

    const purchasingAgentsArr = businessArr.map(business => {
        const agent =
        {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameFirst}`,
            company: business.companyName,
            phoneNumber: business.phoneWork
        }
        return agent
    })

    purchasingAgentsArr.forEach(agent => {
        contentElement.innerHTML += `
        <h1>${agent.fullName}<h1>
        <p>${agent.company}<p>
        <p>${agent.phoneNumber}<p>`;
    })
}

export const SearchBar = () => {

    // Place an article element in your HTML with the class below
    const companySearchResultArticle = document.querySelector(".foundCompanies")

    document
        .querySelector("#companySearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /*
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.
    
                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */

                const foundBusiness = businessArr.find(business => business.companyName.toLowerCase()
                    .includes(keyPressEvent.target.value.toLowerCase()))

                console.log("found business", foundBusiness)

                companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
            }
        });

}

