import React from 'react';

const ListingCreationForm = () => {
  return (
    <div>
      <table>
        <tr>
          <td>Title:</td>
          <td><input id="input-title" /></td>
        </tr>
        <tr>
        <td>Description:</td>
          <td><input id="input-description"/></td>
        </tr>
        <tr>
        <td>Type:</td>
          <td><input id="input-type"/></td>
        </tr>
        <tr>
        <td>Price:</td>
          <td><input id="input-price"/></td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </div>
  );
};

export default ListingCreationForm;
