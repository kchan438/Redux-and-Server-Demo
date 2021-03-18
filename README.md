## Run individual tests locally:
- `npm run test:Listing`
- `npm run test:ListingCreationForm`
- `npm run test:ViewListings`
- `npm run test:Inquiries`
- `npm run lint`

### Inquiries
- Renders a list of inquiries
- use `inquiryReducer.inquiries`
- Each item should have class `inquiry`

### Listings
- add a prop `userMode` if true, users can inquire, if false it will be for admins to add/delete lisitings
- if admin add delete button which will call `/api/deleteListing`
- if user add form to create inquiry on that item

### Listing creation form
- add fields for each of the 4 values, give them id's like `input-description`

### ViewListings
- Displays list of Listings
- Fetch data from `/api/viewListings` on load
- each listing needs class `listing`

CSS is optional.


### Running full stack
Open another window of vs code with homework 1, run it locally, and leave it on. Run this project in a separate vs code window.

It is NOT necessary to run either project to use the unit tests.