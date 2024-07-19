export const getAllItems = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/GET`, {
      method: "GET",
      headers: {
           "content-type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const putNewItem= async (req) => {
  try {
    const res = await fetch(`http://localhost:3000/api/POST`, {
      method: "POST",
      headers: {
           "content-type": "application/json",
      },
      body:JSON.stringify(req)
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteItem= async (req) => {
  try {
    
    const res = await fetch(`http://localhost:3000/api/DELETE`, {
      method: "DELETE",
      headers: {
           "content-type": "application/json",
      },
      body:JSON.stringify(req)
    });

    const data = await res.json();
    console.log("req",data)

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateItem = async (formData) => {
  try {
    const res = await fetch("/api/UPDATE", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};