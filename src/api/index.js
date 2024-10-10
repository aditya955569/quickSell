export const getDetails = async () => {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment ",
      {
        method: "GET",
      }
    );
    console.log("Response : ", response);
    if (!response.ok) {
      throw new Error("Error occurred in response");
    }
    const responseData = await response.json();
    console.log("Response Data : ", responseData);
    return responseData;
  } catch (error) {
    console.log("Error occurred while fetching data : ", error);
  }
};
