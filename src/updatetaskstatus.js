const updateTaskStatusUI = (pendingCount, completedCount) => {
    const pendingCountElement = document.querySelector("#pcount");
    const completedCountElement = document.querySelector("#ccount");

    if (pendingCountElement) pendingCountElement.textContent = pendingCount;
    if (completedCountElement) completedCountElement.textContent = completedCount;
};
export{updateTaskStatusUI}
