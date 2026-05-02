import { culet } from "@carats/ssr";
import getProfileData from "./service/get-profile-data";
import getTradeData from "./service/get-trade-data";

culet('/trade/:symbol', getTradeData)
culet('/profile', getProfileData)