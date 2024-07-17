export const getAllCartItems = async () => {
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

export const putNewItems = async (req) => {
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
