import { create } from "zustand";
import { toast } from "react-toastify";

export const useRemedyStore = create((set) => ({
  remedies: [],
  poisons: [],
  boosters: [],
  filter: "",
  loading: false,
  darkTheme: false,
  
  setFilter: (filter) => set({ filter }),
  setLoading: (loading) => set({ loading }),
  setDarkTheme: (darkTheme) => set({ darkTheme }),

  setRemedies: (remedies) => set({ remedies }),
  setBoosters: (boosters) => set({ boosters }),
  setPoisons: (poisons) => set({ poisons }),

  createRemedy: async (newRemedy) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/remedy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRemedy),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({})); // Fallback for non-JSON responses
        set(() => ({ loading: false }));
        return {
          status: false,
          message: errorData.message || "Request failed",
        };
      }

      const data = await res.json();
      set((state) => ({ remedies: [...state.remedies, data.data] }));
      set(() => ({ loading: false }));
      return { status: true, message: "Remedy added successfully" };
    } catch (error) {
      console.error("Error creating remedy:", error);
      set(() => ({ loading: false }));
      return { status: false, message: "Network error or server issue" };
    }
  },
  fetchRemedies: async () => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/remedy`);
      if (!res.ok) {
        console.error("Failed to fetch remedies");
        toast.error("Failed to fetch remedies", {
          className: "toastify-container",
          bodyClassName: "toastify-container",
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        set(() => ({ loading: false }));
        return;
      }

      const data = await res.json();
      set({ remedies: data.data }); // Update the correct state
      set(() => ({ loading: false }));
    } catch (error) {
      console.error("Error fetching remedies:", error);
      toast.error("Error fetching remedies", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  deleteRemedy: async (rid) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/remedy?id=${rid}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status) return { status: false, message: data.message };

      // update the ui immediately, without needing a refresh
      set((state) => ({
        remedies: state.remedies.filter((remedy) => remedy._id !== rid),
      }));

      return { status: true, message: data.message };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error deleting remedies:", error);
      toast.error("Error deleting remedies", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  updateRemedy: async (rid, updatedRemedy) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/remedy?id=${rid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRemedy),
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status)
        return { status: false, message: "Unable to update at the moment" };
      return { status: true, message: "Remedy updated successfully" };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error updating remedies:", error);
    }
  },

  createPoison: async (newPoison) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/poison`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoison),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({})); // Fallback for non-JSON responses
        set(() => ({ loading: false }));
        return {
          status: false,
          message: errorData.message || "Request failed",
        };
      }

      const data = await res.json();
      set((state) => ({ poisons: [...state.poisons, data.data] }));
      set(() => ({ loading: false }));
      return { status: true, message: "Poison added successfully" };
    } catch (error) {
      console.error("Error creating poison:", error);
      set(() => ({ loading: false }));
      return { status: false, message: "Network error or server issue" };
    }
  },
  fetchPoisons: async () => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/poison`);
      if (!res.ok) {
        console.error("Failed to fetch poisons");
        toast.error("Failed to fetch poisons", {
          className: "toastify-container",
          bodyClassName: "toastify-container",
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        set(() => ({ loading: false }));
        return;
      }

      const data = await res.json();
      set({ poisons: data.data }); // Update the correct state
      set(() => ({ loading: false }));
    } catch (error) {
      console.error("Error fetching poisons:", error);
      toast.error("Error fetching poisons", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  deletePoison: async (rid) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/poison?id=${rid}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status) return { status: false, message: data.message };

      // update the ui immediately, without needing a refresh
      set((state) => ({
        poisons: state.poisons.filter((poison) => poison._id !== rid),
      }));

      return { status: true, message: data.message };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error deleting poisons:", error);
      toast.error("Error deleting poisons", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  updatePoison: async (rid, updatedPoison) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/poison?id=${rid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPoison),
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status)
        return { status: false, message: "Unable to update at the moment" };
      return { status: true, message: "Poison updated successfully" };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error updating poisons:", error);
    }
  },

  createBooster: async (newBooster) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/booster`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooster),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({})); // Fallback for non-JSON responses
        set(() => ({ loading: false }));
        return {
          status: false,
          message: errorData.message || "Request failed",
        };
      }

      const data = await res.json();
      set((state) => ({ boosters: [...state.boosters, data.data] }));
      set(() => ({ loading: false }));
      return { status: true, message: "Booster added successfully" };
    } catch (error) {
      console.error("Error creating booster:", error);
      set(() => ({ loading: false }));
      return { status: false, message: "Network error or server issue" };
    }
  },
  fetchBoosters: async () => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/booster`);
      if (!res.ok) {
        console.error("Failed to fetch boosters");
        toast.error("Failed to fetch boosters", {
          className: "toastify-container",
          bodyClassName: "toastify-container",
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        set(() => ({ loading: false }));
        return;
      }

      const data = await res.json();
      set({ boosters: data.data }); // Update the correct state
      set(() => ({ loading: false }));
    } catch (error) {
      console.error("Error fetching boosters:", error);
      toast.error("Error fetching boosters", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  deleteBooster: async (rid) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/booster?id=${rid}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status) return { status: false, message: data.message };

      // update the ui immediately, without needing a refresh
      set((state) => ({
        boosters: state.boosters.filter((booster) => booster._id !== rid),
      }));

      return { status: true, message: data.message };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error deleting boosters:", error);
      toast.error("Error deleting boosters", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  },
  updateBooster: async (rid, updatedBooster) => {
    try {
      set(() => ({ loading: true }));
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/booster?id=${rid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBooster),
        }
      );
      const data = await res.json();
      set(() => ({ loading: false }));

      if (!data.status)
        return { status: false, message: "Unable to update at the moment" };
      return { status: true, message: "Booster updated successfully" };
    } catch (error) {
      set(() => ({ loading: false }));
      console.error("Error updating boosters:", error);
    }
  },
}));
