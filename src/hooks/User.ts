import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/app_context";

const GetUser = (identifier: number | string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const appContext = useContext(AppContext);
    if (!appContext) {
      throw new Error('component must be wrapped in a provider');
    }
  const {setUser, user} = appContext;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<any>(`http://localhost:8000/users/${identifier}`);
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default GetUser;
