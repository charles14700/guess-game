import create from "zustand";
import { persist } from "zustand/middleware";

let store2 = (set) => ({
  fullname: "",
  phoneNo: "",
  city: "",
  trials: 0,
  postcode: "",
  country: "",
  paymentmethod: "",

  updfullname: (name) => {
    set((state) => ({
      fullname: name,
    }));
  },

  updaddress: (phoneNo) => {
    set((state) => ({
      phoneNo: phoneNo,
    }));
  },

  updcity: (city) => {
    set((state) => ({
      city: city,
    }));
  },
  updtrials: () => {
    set((state) => ({
      trials: state.trials + 0.5,
    }));
  },

  updpostcode: (postcode) => {
    set((state) => ({
      postcode: postcode,
    }));
  },

  updcountry: (country) => {
    set((state) => ({
      country: country,
    }));
  },
  updpaymentmethod: (payment) => {
    set((state) => ({
      paymentmethod: payment,
    }));
  },
});

store2 = persist(store2, { name: "details" });

const useStore2 = create(store2);

export default useStore2;
