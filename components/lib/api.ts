const BASE_URL = "http://localhost:3000/api";

export async function fetchAPI(input?: RequestInfo, options?) {
  const url = BASE_URL + input;
  let res;

  const response = await fetch(url, options);
  res = response;

  /* if (input == "/me" && options?.method == "PATCH") {
    const response = await fetch(url, options);
    res = response;
  }
  if (input == "/me/address" && options?.method == "PATCH") {
    const response = await fetch(url, options);
    res = response;
  }
  if (input == "/me") {
    const state = localStorage.getItem("saved-state");
    const parsedState = JSON.parse(state);

    const response = await fetch(url, {
      headers: {
        authorization: `bearer ${parsedState.token}`,
      },
    });
    res = response;
  } else {
    const response = await fetch(url, options);
    res = response;
  } */

  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    console.log("data api: ", data);
    return data;
  } else {
    throw new Error(`Hubo un error ${res.status}: ${res.statusText}`);
  }
}

export async function CreateTraveler(data: object) {
  console.log("api: ", typeof data);
  if (data) {
    fetchAPI("/traveler", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export async function CreateOwner(data: object) {
  if (data) {
    fetchAPI("/owner", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export async function getOwners() {
  const bestOwners = await fetchAPI("/owner", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return bestOwners;
}
