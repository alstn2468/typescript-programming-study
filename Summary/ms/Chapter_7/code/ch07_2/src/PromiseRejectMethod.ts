Promise.reject(new Error("에러 발생")).catch(
    (err: Error) => (err: Error) => console.log("error:", err.message) // error: 에러 발생
);
