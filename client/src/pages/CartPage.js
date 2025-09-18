import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState();
  const [loading, setLoading] = useState(false);

  // Calculate total price
  const totalPrice = () => {
    try {
      const total = cart?.reduce((sum, item) => sum + item.price, 0);
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.error(error);
      return "₹0";
    }
  };

  // Remove item from cart
  const removeCartItem = (productId) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch Braintree client token
  const fetchClientToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      console.log(data);
      setClientToken(data?.clientToken);
    } catch (error) {
      console.error("error in fetching client token ", error);
    }
  };

  useEffect(() => {
    fetchClientToken();
    // eslint-disable-next-line
  }, [auth?.token]);

  // Handle payment
  const handlePayment = async () => {
    if (!instance) {
      toast.error("Payment instance not found");
      return;
    }
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Payment Completed Successfully");
      navigate("/dashboard/user/orders");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="App Cart Page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token ? auth?.user?.name : ""}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please Login to CheckOut"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {cart?.map((product) => (
                <div className="row mb-2 card flex-row p-3" key={product._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${product._id}`}
                      className="card-img-top"
                      alt={product.name}
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col-md-8">
                    <p>{product.name}</p>
                    <p>{product.description?.substring(0, 30) || ""}</p>
                    <p>Price: {product.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | CheckOut | Payment</p>
            <hr />
            <h4>Total: {totalPrice()}</h4>
            {auth?.user?.address ? (
              <div className="mb-3">
                <h4>
                  Current Address: {auth.user.address}{" "}
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </h4>
              </div>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/login", { state: "/cart" })}
                  >
                    Please Login For Checkout
                  </button>
                )}
              </div>
            )}
            <div className="mt-2">
              {clientToken && cart?.length > 0 && (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: { flow: "vault" },
                    }}
                    onInstance={setInstance}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
