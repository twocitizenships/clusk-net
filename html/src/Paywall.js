import { requestProvider } from "webln";

const managePayment = async () => {
    const webln = await requestProvider();
    const payment = await webln.sendPayment(invoice);
    setPayment(payment);
};

const fetchInvoice = async () => {
    const apiKey = "bc450881c4db44b69db6947179ac427d";
    const data = `{"out": false, "amount": 5, "memo": "Lightning rocks", "unit": "sat", "webhook": "", "internal": false}`;
    const getInvoice = {
        method: "POST",
        headers: { "content-type": "application/json", "X-Api-Key": apiKey },
        data: data,
        url: "https://legend.lnbits.com/api/v1/payments",
    };
    await axios
        .request(getInvoice)
        .then(async function (res) {
            setInvoice(res.data.payment_request);
        })
        .catch(function (err) {
            console.log("error = " + err);
        });
};

export default Paywall;