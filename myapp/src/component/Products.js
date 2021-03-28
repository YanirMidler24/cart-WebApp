import React, { useState } from "react";
import { Card, Dropdown, ListGroup, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import "../app.css";

//Data source
const Products_List = {
  Ingredients: ["apples", "eggs", "coffee", "milk", "suger"],
  Clothes: ["shoes", "t-shirt", "dresses", "pants", "jacket"],
  Home_Products: ["broom", "mop", "battries", "wipes", "cleaners"],
};

export default function Products() {
  //State
  const [searchValue, setSearchValue] = useState("");
  const [products] = useState(Products_List);
  const [categories, setCategories] = useState(null);
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(true);

  // Function -> Add item to cart
  const addItemToList = (item) => {
    setCart([...cart, item]);
  };

  // Function -> Delete item from cart
  const deleteItemFromList = (item) => {
    let arr = [...cart];
    let list = arr.filter((x) => x !== item);
    setCart(list);
  };

  // Function showlist-> show the cart div (Done button)
  const showlist = () => {
    setFlag(false);
  };

  // Function cleanCart-> hide the cart div AND clean the cart (Start Over button)
  const cleanCart = () => {
    setCart([]);
    setCategories(null);
    setSearchValue("");
    setFlag(true);
  };

  return (
    <div className="center">
      <Card style={{ backgroundColor: "#DFCFBE" }}>
        <div className="wrapper">
          <h1 style={{ marginLeft: "200px" }}>Shopping List</h1>
          <br />
          {/* Select Menu to Choose Categories */}
          <Dropdown style={{ marginRight: "30px" }}>
            <Dropdown.Toggle variant="pramiry" id="dropdown-basic">
              <strong>
                <h5>categories Options</h5>
              </strong>
            </Dropdown.Toggle>

            {/* Select Options Categories */}
            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => setCategories(null)}>
                <strong> All categories</strong>
              </Dropdown.Item>

              <Dropdown.Item onSelect={() => setCategories("Clothes")}>
                <strong>Clothes</strong>
              </Dropdown.Item>

              <Dropdown.Item onSelect={() => setCategories("Ingredients")}>
                <strong> Ingredients</strong>
              </Dropdown.Item>

              <Dropdown.Item onSelect={() => setCategories("Home Products")}>
                <strong> Home Products</strong>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />

          {/* Search item bar*/}
          <TextField
            style={{ marginLeft: "15px" }}
            id="standard-basic"
            label="Search A Products"
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <br />
          {/* Ingredients categories */}
          <ListGroup horizontal className="my-2">
            <div className="inner2">
              {categories === "Ingredients" || categories === null
                ? products.Ingredients.map((item, index) => {
                    if (item.includes(searchValue) || searchValue == null) {
                      return (
                        <ListGroup horizontal key={index}>
                          <ListGroup.Item
                            action
                            style={{ border: "2px solid black" }}
                          >
                            <br />
                            <h5>{item}</h5>
                            <br />
                            <Button
                              variant="outline-dark"
                              onClick={() => addItemToList(item)}
                            >
                              add
                            </Button>
                            <Button
                              variant="outline-dark"
                              onClick={() => deleteItemFromList(item)}
                            >
                              delete
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      );
                    }
                  })
                : console.log(null)}
            </div>

            {/* Clothes categories */}

            <div className="inner2">
              {categories === "Clothes" || categories === null
                ? products.Clothes.map((item, index) => {
                    if (item.includes(searchValue) || searchValue == null) {
                      return (
                        <ListGroup horizontal key={index}>
                          <ListGroup.Item
                            action
                            style={{ border: "2px solid black" }}
                          >
                            <br />
                            <h5>{item}</h5>
                            <br />
                            <Button
                              variant="outline-dark"
                              onClick={() => addItemToList(item)}
                            >
                              add
                            </Button>
                            <Button
                              variant="outline-dark"
                              onClick={() => deleteItemFromList(item)}
                            >
                              delete
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      );
                    }
                  })
                : console.log(null)}
            </div>
            {/* Home Products categories */}
            <div className="inner2">
              {categories === "Home Products" || categories === null
                ? products.Home_Products.map((item, index) => {
                    if (item.includes(searchValue) || searchValue == null) {
                      return (
                        <ListGroup horizontal key={index}>
                          <ListGroup.Item
                            action
                            style={{ border: "2px solid black" }}
                          >
                            <br />
                            <h5>{item}</h5>
                            <br />
                            <Button
                              variant="outline-dark"
                              onClick={() => addItemToList(item)}
                            >
                              add
                            </Button>
                            <Button
                              variant="outline-dark"
                              onClick={() => deleteItemFromList(item)}
                            >
                              delete
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      );
                    }
                  })
                : console.log(null)}
              {/* Buttons -> show or hide the cart div  */}
            </div>
            <div style={{ marginLeft: "30px" }} className="inner2">
              <Button
                style={{ marginRight: "20px", marginBottom: "150px" }}
                variant="info"
                onClick={cleanCart}
              >
                Start Over
              </Button>
              <Button
                style={{ marginLeft: "20px", marginBottom: "150px" }}
                variant="primary"
                onClick={showlist}
              >
                Done
              </Button>

              {/* The CART div  */}
              <div hidden={flag}>
                <ul class="list-group list-group-flush">
                  <h3 style={{ marginRight: "20px" }}> Cart List</h3>
                  {[...new Set(cart)].map((item) => {
                    let count = cart.filter((x) => x === item).length;
                    return (
                      <strong>
                        {" "}
                        <li class="list-group-item">{`${count} X ${item}`}</li>
                      </strong>
                    );
                  })}
                </ul>
              </div>
            </div>
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
