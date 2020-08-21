import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

export const NetworkCheck = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isInternetReachable);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    return true;
  }
  return false;
};
