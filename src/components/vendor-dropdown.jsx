import React from "react";
import { connect } from "react-redux";
import { setVendor } from "../redux/orders/orders.action";
import { selectVendor } from "../redux/orders/orders.selector";

const VendorDropdown = props => {
  const vendorList = [
    "None Selected",
    "Vendor 1",
    "Vendor 2",
    "Vendor 3",
    "Vendor 4",
    "Vendor 5"
  ];
  return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
      <label className='vendorListLabel' style={{display: 'block'}}>Select Vendor: </label>
    <select defaultValue={"Vendor 1"} name="vendorListDropdown" id="vendorListDropdown" onChange={(e) => props.setVendor(e.target.value) }>
    {
        vendorList.map(eachVendor => {
            return (
                <option style={{fontSize: '0.75em'}} value={eachVendor}>{eachVendor}</option>
            )
        })
    }
    </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectVendor: selectVendor(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVendor: vendor => dispatch(setVendor(vendor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorDropdown);
