import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Style.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineDash, AiOutlineLine } from "react-icons/ai";
import AdditionalInfo from "./AdditionalInfo";
import RelatedProduct from "./RelatedProduct";
import {
  updateCartItems,
  addQuantityByOne,
} from "../../Store/slices/cartSlices";
import usePageTitle from "../../Hooks/usePageTitle";
import SizeOptionUi from "./SizeOptionUi";
import useToast from "../../Hooks/useToast";
const Product = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { products } = useSelector((state) => state.api);
  const { cartItems, cartSize, cartTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const currentProdcutId = product_id.toString();
  const currentProduct = products.find((product) => {
    return product.id.toString() === currentProdcutId;
  });
  const {
    available_size,
    additonal_information,
    title,
    img_Src,
    desc,
    notes,
    available_roast,
    id,
    Cart_Limit: availableInStock,
  } = currentProduct;
  const prices = available_size?.map((item) => item.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const { pathname } = useLocation();
  // Scrool to top When page was Changed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // ## END ##
  
  // Change page title when single product opend
  const [titleChangerFn, mainTitle] = usePageTitle(title);
  useEffect(() => {
    titleChangerFn();
    return () => (document.title = mainTitle);
  }, [currentProduct]);
  // ## END ##

  // Importing custom Hooks
  const {
    setToastType,
    ToastElement,
    setAlertMsg,
    setShowToast,
    setCustomTimeout,
  } = useToast();
  // ## End ##

  // Handle Add to cart button
  const [currQuantity, setCurrQuantity] = React.useState(1);
  const sizeOptionParam =
    searchParam.get("size") == "" ? null : searchParam.get("size");
  function handleAddToCart() {
    if (!sizeOptionParam) {
      setToastType("warning");
      setAlertMsg("Please select product size");
      setCustomTimeout(1500);
      setShowToast(true);
    } else {
      dispatch(
        updateCartItems({
          curr_item: {
            ...currentProduct,
            selectedSize: sizeOptionParam,
            price: available_size.find((item) => item.size === sizeOptionParam)
              .price,
          },
          curr_quantity: currQuantity,
          updated_Size: sizeOptionParam,
        })
      );
      addToCartToast();
    }
  }

  const addToCartToast = () => {
    const checkItem = cartItems.some((item) => {
      return item.id === id;
    });
    if (checkItem) {
      setToastType("info");
      setAlertMsg("Update successfull");
      setShowToast(true);
      setCustomTimeout(3000);
    } else {
      setToastType("success");
      setAlertMsg("Product added to your cart");
      setCustomTimeout(3000);
      setShowToast(true);
    }
  };
  // ## End ##

  // Handle Increase quantity by one
  function HandleAddQuantityByOne() {
    if (currQuantity >= availableInStock) {
      setToastType("info");
      setAlertMsg(`Left only ${availableInStock} prodcuts in stock `);
      setCustomTimeout(3000);
      setShowToast(true);
      setCurrQuantity((prev) => prev);
    } else {
      setCurrQuantity((prev) => prev + 1);
    }
  }
  // Handle Deacrese quantity by one
  function HandleMinusQuantityByOne() {
    if (currQuantity <= 1) {
      setCurrQuantity(1);
    } else {
      setCurrQuantity((prev) => prev - 1);
    }
  }

  useLayoutEffect(() => {
    const getCurrItem = cartItems.find((item) => {
      return item.id === id;
    });
    if (!!getCurrItem) {
      setCurrQuantity(getCurrItem.quantity);
      setSearchParam((prev) => {
        prev.set("size", getCurrItem.selectedSize);
        return prev;
      });
    } else {
      setCurrQuantity(1);
      setSearchParam((prev) => {
        prev.delete("size");
        return prev;
      });
    }
  }, [currentProduct]);

  const [CheckCartIfAvail, setCheckCartIfAvail] = useState(
    cartItems.some((item) => item.id === id)
  );

  function ResetOptions() {
    setCurrQuantity(1);
    setSearchParam((prev) => {
      prev.delete("size");
      return prev;
    });
  }

  useEffect(() => {
    setCheckCartIfAvail(cartItems.some((item) => item.id === id));
    return () => setCheckCartIfAvail(false);
  }, [cartItems, currentProduct]);

  function HandleClearOptions() {
    ResetOptions();
  }
  return (
    <div id="single-product-page" className="page-container">
      <ToastElement />
      <div className="single-product-layout">
        <div className="single-product-wrapper">
          <div className="main-content-wrap">
            <div className="img-wrap">
              <img src={img_Src} alt="img not found" />
            </div>

            <div className="detail-wrap">
              <div className="detail-body">
                <div className="product-title">
                  <h3>{title}</h3>
                </div>

                <div className="product-price">
                  <h3>
                    {prices.length > 1
                      ? `$${minPrice} - $${maxPrice}`
                      : `$${prices}`}
                  </h3>
                </div>

                <div className="product-desc">
                  <p>{desc}</p>
                </div>

                <div className="product-notes">
                  <h3>Notes</h3>
                  <p>{notes}</p>
                </div>

                <div className="product-options-wrapper">
                  <SizeOptionUi data={available_size} />
                  <div className="clear-options-btn-wrap">
                    <button onClick={HandleClearOptions}>CLEAR</button>
                  </div>
                </div>

                <div className="item-quantity-changer-wrap">
                  <div>
                    <button onClick={HandleMinusQuantityByOne}>
                      <AiOutlineLine />
                    </button>
                    <span className="size-counter">{currQuantity}</span>
                    <button onClick={HandleAddQuantityByOne}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>

                <div className="selected-itm-price">
                  <h3>
                    {sizeOptionParam &&
                      `$${
                        available_size.find(
                          (item) => item.size === sizeOptionParam
                        ).price * currQuantity
                      }`}
                  </h3>
                </div>

                <div className="add-to-cart-wrap">
                  {CheckCartIfAvail ? (
                    <button onClick={handleAddToCart}>UPDATE YOUR CART</button>
                  ) : (
                    <button onClick={handleAddToCart}> ADD TO CART</button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <AdditionalInfo data={additonal_information} />
          <RelatedProduct data={currentProduct} />
        </div>
      </div>
    </div>
  );
};

export default Product;
