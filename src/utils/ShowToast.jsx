export const ShowToast = (message, type = "success") => {
  const toast = document.createElement("div");

  const isSuccess = type === "success";

  toast.className =
    "fixed top-[100px] left-1/2 transform -translate-x-1/2 z-[9999] px-4 py-2 rounded-md text-sm font-medium shadow-lg flex items-center gap-2 animate-toast-slide-up-down";

  toast.style.backgroundColor = isSuccess ? "#d1fae5" : "#fee2e2";
  toast.style.borderLeft = `4px solid ${isSuccess ? "#10b981" : "#ef4444"}`;
  toast.style.color = isSuccess ? "#065f46" : "#991b1b";

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="${isSuccess ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}" />
    </svg>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
};
