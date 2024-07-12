import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/shared/lib/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;