import React, { useEffect, useRef, useState } from "react";

export default function Paypal({ toggle = () => {} }) {
  const buttonRef = useRef();
  const [loaded, setLoaded] = useState(false);

  const basketTotal = 69.9;

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWn_0OuRJX-rhpQyPFqZDbV5Eh-zc5R0_BPDjv62IYvBHkmAEpx0jDPoNYnGCoaIvWI6ZK4eG2fPT5BX";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        const { paypal } = window as any;
        paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Checkout ekky order",
                    amount: {
                      currency_code: "USD",
                      value: basketTotal,
                    },
                  },
                ],
              });
            },
            onApprove: async (data: any, actions: any) => {
              const order = await actions.order.capture();
              if (order.status === "COMPLETED") {
                handlePay();
              }
            },
            onError: (err: any) => {
              toggle();
            },
          })
          .render(buttonRef.current);
      }, 1000);
    }
  }, [loaded]);

  const handlePay = async () => {
    toggle();
    const ref = orderRef(8);
    // firebase
    //   .firestore()
    //   .collection(user.email)
    //   .doc(ref)
    //   .set({
    //     [ref]: basket,
    //     timestamp: Date(),
    //     payment_type: "Paypal",
    //     status: "pending",
    //   })
    //   .catch((e) => {});
    // axios
    //   .post("http://localhost:3000/email", {
    //     email: user.email,
    //     msg: `Payment for order: ${ref} has been received and will be processed shortly`,
    //   })
    //   .catch((e) => {});
  };

  return <div className="paypal__btn" ref={buttonRef as any} />;
}
function orderRef(arg0: number) {
  throw new Error("Function not implemented.");
}