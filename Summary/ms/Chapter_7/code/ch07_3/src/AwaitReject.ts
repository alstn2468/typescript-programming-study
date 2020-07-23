const awaitReject = async () => {
    await Promise.reject(new Error('error'));
};

awaitReject().catch((err) => console.log('error :', err.message)); // error: error
