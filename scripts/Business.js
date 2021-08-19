export const Business = (businessObj) => {
    return `
    <h2 class="business_title">${businessObj.companyName}<h2>
    
    <p class="business_details">${businessObj.addressFullStreet}<p>
    <p class="business_details">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}<p>
        <hr>`
}