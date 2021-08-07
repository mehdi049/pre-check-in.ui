import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import MyBooking from "../views/MyBooking.vue";
import PreCheckIn from "../views/PreCheckIn.vue";
import Contact from "../views/Contact.vue";
import BBQFun from "../views/BBQFun.vue";
import PicnicBasket from "../views/PicnicBasket.vue";
import DiningOptions from "../views/DiningOptions.vue";
import BookingInfo from "../views/BookingInfo.vue";
import Weather from "../views/Weather.vue";
import TripAdvisor from "../views/TripAdvisor.vue";
import HolidayCheck from "../views/HolidayCheck.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/my-booking",
    name: "MyBooking",
    component: MyBooking,
  },
  {
    path: "/pre-check-in",
    name: "PreCheckIn",
    component: PreCheckIn,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/bbq-fun",
    name: "BBQFun",
    component: BBQFun,
  },
  {
    path: "/picnic-basket",
    name: "PicnicBasket",
    component: PicnicBasket,
  },
  {
    path: "/dining-options",
    name: "DiningOptions",
    component: DiningOptions,
  },

  {
    path: "/booking-info",
    name: "BookingInfo",
    component: BookingInfo,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/tripadvisor",
    name: "TripAdvisor",
    component: TripAdvisor,
  },
  {
    path: "/holiday-check",
    name: "HolidayCheck",
    component: HolidayCheck,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
