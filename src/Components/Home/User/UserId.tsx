import React, { useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const UserLogin: React.FC = () => {
  useEffect(() => {
    const loadFingerprint = async () => {
      try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const visitorId: string = result.visitorId;
        localStorage.setItem("user_id", visitorId);
        // console.log("Visitor ID: ", visitorId);
      } catch (error) {
        console.error("Error loading FingerprintJS:", error);
      }
    };

    loadFingerprint();
  }, []);
};

export default UserLogin;
