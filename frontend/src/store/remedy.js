import { create } from "zustand";

export const useRemedyStore = create((set) => ({
  remedies: [],
  setRemedies: (remedies) => set({ remedies }),
  createRemedy: async (newRemedy) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/remedies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRemedy),
      });
  
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({})); // Fallback for non-JSON responses
        return { status: false, message: errorData.message || "Request failed" };
      }
  
      const data = await res.json();
      set((state) => ({ remedies: [...state.remedies, data.data] }));
      return { status: true, message: "Remedy added successfully" };
    } catch (error) {
      console.error("Error creating remedy:", error);
      return { status: false, message: "Network error or server issue" };
    }
  },
  fetchRemedies: async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/remedies`);
      if (!res.ok) {
        console.error("Failed to fetch remedies");
        return;
      }
  
      const data = await res.json();
      set({ remedies: data.data }); // Update the correct state
    } catch (error) {
      console.error("Error fetching remedies:", error);
    }
  },
}));
