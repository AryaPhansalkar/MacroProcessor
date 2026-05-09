export const runMacroProcessor = async (code, mode) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/macro/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, mode }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Backend error:", error);
    return {
      mnt: [],
      mdt: [],
      expandedCode: "",
      errors: ["Failed to connect to backend"],
      ala: [] 
    };
  }
};