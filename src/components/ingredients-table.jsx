// jshint esversion:6
import React from "react";
import { connect } from "react-redux";
import {
  selectQuantity1,
  selectQuantity2,
  selectQuantity3,
  selectQuantity4,
  selectQuantity5,
  selectVendor,
  selectButtonText
} from "../redux/orders/orders.selector";
import {
  setQuantity1,
  setQuantity2,
  setQuantity3,
  setQuantity4,
  setQuantity5,
  setButtonText
} from "../redux/orders/orders.action";

const IngredientsTable = props => {
  const unitCosts = {
        "None Selected": ["-", "-", "-", "-", "-"],
        "Vendor 1": ["3.00", "11.40", "3.30", "14.60", "11.05"],
        "Vendor 2": ["2.25", "11.10", "8.00", "10.00", "9.50"],
        "Vendor 3": ["4.00", "15.00", "4.50", "6.75", "7.00"],
        "Vendor 4": ["5.00", "12.50", "2.75", "13.00", "9.75"],
        "Vendor 5": ["1.50", "11.90", "2.25", "12.00", "12.00"]
  };

  const deliveryTimes = {
      "None Selected": 'NA',
      "Vendor 1": '1 hrs 55 mins',
      "Vendor 2": '1 hr 45 mins',
      "Vendor 3": '1 hrs 32 mins',
      "Vendor 4": '1 hr 50 mins',
      "Vendor 5": "1 hr 24 mins"
  }

  const buttonText = ["Check Out", "Confirm", "Loading...", "Placed"];

  return (
    <div className="main-table">
    <p>Ingredients List</p>
    <table align="center">
        <thead>
            <tr>
                <td>Ingredient Name</td>
                <td>Unit Cost</td>
                <td >Select Item</td>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(unitCosts).map((unitCost, i) => {
                    if (i === 0) {
                        return;
                    } else {
                      return (
                          <tr>
                            <td>{'Ingredient ' + i}</td>
                            <td>{unitCosts[props.selectVendor][i - 1]}</td>
                            <td onClick={() => {
                                if (i === 1) {
                                    props.setQuantity1(props.selectQuantity1 + 1);
                                } else if (i === 2) {
                                    props.setQuantity2(props.selectQuantity2 + 1);
                                } else if (i === 3) {
                                    props.setQuantity3(props.selectQuantity3 + 1);
                                } else if (i === 4) {
                                    props.setQuantity4(props.selectQuantity4 + 1);
                                } else {
                                    props.setQuantity5(props.selectQuantity5 + 1);
                                }
                            }} className="add-to-cart" style={{cursor: 'pointer'}}>Add to Cart</td>
                          </tr>
                      )
                    }
                })
            }
            </tbody>
    </table>
    <p>Your Cart</p>
      <table align="center">
        <thead>
          <tr>
            <td>Ingredient Name</td>
            <td>Quantity</td>
            <td>Unit Cost</td>
            <td>Item Total</td>
          </tr>
        </thead>
        <tbody>
        {
            props.selectQuantity1 ?
            (
                <tr>
                    <td>Ingredient 1</td>
                    <td>
                    <button className="add"
                        onClick={() => {
                        props.setQuantity1(props.selectQuantity1 + 1);
                        }}
                    >
                        +
                    </button>
                    <button className="subtract"
                        onClick={() => {
                        props.setQuantity1(Math.max(props.selectQuantity1 - 1, 0));
                        }}
                    >
                        -
                    </button>
                    {props.selectQuantity1}
                    </td>
                    <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + unitCosts[props.selectVendor][0]}</td>
                    <td>
                    {props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity1 * unitCosts[props.selectVendor][0]).toFixed(2)}
                    </td>
                </tr>
            ) 
            : 
            (
                null
            )
        }
          {
              props.selectQuantity2 ? 
                (
                    <tr>
                        <td>Ingredient 2</td>
                        <td>
                        <button className="add"
                            onClick={() => {
                            props.setQuantity2(props.selectQuantity2 + 1);
                            }}
                        >
                            +
                        </button>
                        <button className="subtract"
                            onClick={() => {
                            props.setQuantity2(Math.max(props.selectQuantity2 - 1, 0));
                            }}
                        >
                            -
                        </button>
                        {props.selectQuantity2}
                        </td>
                        <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + unitCosts[props.selectVendor][1]}</td>
                        <td>
                        {props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity2 * unitCosts[props.selectVendor][1]).toFixed(2)}
                        </td>
                    </tr>
                ) 
                : 
                (
                  null
                )
          }
          {
              props.selectQuantity3 ? 
              (
                <tr>
                    <td>Ingredient 3</td>
                    <td>
                    <button className="add"
                        onClick={() => {
                        props.setQuantity3(props.selectQuantity3 + 1);
                        }}
                    >
                        +
                    </button>
                    <button className="subtract"
                        onClick={() => {
                        props.setQuantity3(Math.max(props.selectQuantity3 - 1, 0));
                        }}
                    >
                        -
                    </button>
                    {props.selectQuantity3}
                    </td>
                    <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + unitCosts[props.selectVendor][2]}</td>
                    <td>
                    {props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity3 * unitCosts[props.selectVendor][2]).toFixed(2)}
                    </td>
                </tr>
              ) 
              : 
              (
                  null
              )
          }
          {
              props.selectQuantity4 ? 
              (
                <tr>
                    <td>Ingredient 4</td>
                    <td>
                    <button className="add"
                        onClick={() => {
                        props.setQuantity4(props.selectQuantity4 + 1);
                        }}
                    >
                        +
                    </button>
                    <button className="subtract"
                        onClick={() => {
                        props.setQuantity4(Math.max(props.selectQuantity4 - 1, 0));
                        }}
                    >
                        -
                    </button>
                    {props.selectQuantity4}
                    </td>
                    <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + unitCosts[props.selectVendor][3]}</td>
                    <td>
                    {props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity4 * unitCosts[props.selectVendor][3]).toFixed(2)}
                    </td>
                </tr>
              ) 
              : 
              (
                  null
              )
          }
          {
              props.selectQuantity5 ? 
              (
                <tr>
                    <td>Ingredient 5</td>
                    <td>
                    <button className="add"
                        onClick={() => {
                        props.setQuantity5(props.selectQuantity5 + 1);
                        }}
                    >
                        +
                    </button>
                    <button className="subtract"
                        onClick={() => {
                        props.setQuantity5(Math.max(props.selectQuantity5 - 1, 0));
                        }}
                    >
                        -
                    </button>
                    {props.selectQuantity5}
                    </td>
                    <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + unitCosts[props.selectVendor][4]}</td>
                    <td>
                    {props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity5 * unitCosts[props.selectVendor][4]).toFixed(2)}
                    </td>
                </tr>
              ) 
              : 
              (
                  null
              )
          }
        </tbody>
        <br/>
        <thead>
        <tr>
        <td style={{border: '1px solid transparent'}}></td>
        <td style={{border: '1px solid transparent', borderRight: '1px solid gray'}}></td>
        <td colspan="1">Delivery ETA:</td>
        <td colspan="1">Total Cost:</td>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td style={{border: '1px solid transparent'}}></td>
          <td style={{border: '1px solid transparent', borderRight: '1px solid gray'}}></td>
            <td>{deliveryTimes[props.selectVendor]}</td>
            <td>{props.selectVendor === 'None Selected' ? 'NA' : "$" + parseFloat(props.selectQuantity1 * unitCosts[props.selectVendor][0] + props.selectQuantity2 * unitCosts[props.selectVendor][1] + props.selectQuantity3 * unitCosts[props.selectVendor][2] + props.selectQuantity4 * unitCosts[props.selectVendor][3] + props.selectQuantity5 * unitCosts[props.selectVendor][4]).toFixed(2)}</td>
          </tr>
      </tbody>
      <br/>
      <tbody>
          <td style={{border: '1px solid transparent'}}></td>
          <td style={{border: '1px solid transparent'}}></td>
          <td style={{border: '1px solid transparent', borderRight: '1px solid gray'}}></td>
          <td onClick={() => props.setButtonText(props.selectButtonText + 1)} style={{cursor: 'pointer', color: 'white', backgroundColor: '#12947f'}}>{buttonText[Number(props.selectButtonText)]}</td>
      </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectQuantity1: selectQuantity1(state),
    selectQuantity2: selectQuantity2(state),
    selectQuantity3: selectQuantity3(state),
    selectQuantity4: selectQuantity4(state),
    selectQuantity5: selectQuantity5(state),
    selectVendor: selectVendor(state),
    selectButtonText: selectButtonText(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setButtonText: index => dispatch(setButtonText(index)),
    setQuantity1: qty => dispatch(setQuantity1(qty)),
    setQuantity2: qty => dispatch(setQuantity2(qty)),
    setQuantity3: qty => dispatch(setQuantity3(qty)),
    setQuantity4: qty => dispatch(setQuantity4(qty)),
    setQuantity5: qty => dispatch(setQuantity5(qty))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsTable);
